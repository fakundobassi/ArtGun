#!/usr/bin/env python3
"""Create optimized WebP copies for local PNG/JPEG assets referenced by the site.

Run from the repository root with: py scripts\\optimizar_imagenes.py
"""

from pathlib import Path
import re

try:
    from PIL import Image, ImageOps
except ImportError as error:
    raise SystemExit("Install Pillow first with: py -m pip install Pillow") from error


ROOT = Path(__file__).resolve().parents[1]
SOURCE_FILES = [ROOT / "index.html"]
SOURCE_FILES.extend((ROOT / "js").rglob("*.js"))
SOURCE_FILES.extend((ROOT / "css").rglob("*.css"))
IMAGE_REFERENCE = re.compile(
    r"""(?P<quote>["'])(?P<path>img/[^"']+?\.(?:png|jpe?g))(?P=quote)""",
    re.IGNORECASE,
)
MAX_DIMENSION = 1920
WEBP_QUALITY = 82


def optimized_path(source_path):
    source_relative = Path(source_path.removeprefix("img/"))
    return Path("img/optimizadas") / source_relative.with_suffix(".webp")


def optimize_image(source, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        image.save(destination, "WEBP", quality=WEBP_QUALITY, method=6)


def main():
    contents = {path: path.read_text(encoding="utf-8") for path in SOURCE_FILES if path.is_file()}
    references = {}
    for content in contents.values():
        for match in IMAGE_REFERENCE.finditer(content):
            source_path = match.group("path")
            references[source_path] = optimized_path(source_path).as_posix()

    missing_sources = []
    converted = []
    saved_bytes = 0
    for source_path, output_path in references.items():
        source = ROOT / Path(source_path)
        destination = ROOT / Path(output_path)
        if not source.is_file():
            missing_sources.append(source_path)
            continue
        if not destination.exists() or source.stat().st_mtime > destination.stat().st_mtime:
            optimize_image(source, destination)
            converted.append(source_path)
        saved_bytes += source.stat().st_size - destination.stat().st_size

    if missing_sources:
        raise SystemExit("Referenced source images not found:\n" + "\n".join(missing_sources))

    for path, content in contents.items():
        updated = IMAGE_REFERENCE.sub(
            lambda match: (
                f"{match.group('quote')}{references[match.group('path')]}"
                f"{match.group('quote')}"
            ),
            content,
        )
        if updated != content:
            path.write_text(updated, encoding="utf-8", newline="")

    print(
        f"Optimized {len(references)} image references "
        f"({len(converted)} newly converted); "
        f"saved approximately {saved_bytes / 1024 / 1024:.1f} MB."
    )


if __name__ == "__main__":
    main()
