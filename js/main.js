/**
 * ARTGUN — JavaScript principal
 * ==============================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =============================
     NAVEGACIÓN — SCROLL & MOBILE
     ============================= */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* =============================
     CATÁLOGO — RENDERIZADO
     ============================= */
  const grid = document.getElementById('productosGrid');
  let categoriaActiva = 'todos';
  let textoBusqueda = '';
  let imagenPersonalizada = null;
  let urlImagenPersonalizada = '';

  const CATEGORIAS_LABELS = {
    'cine-musica': 'Música',
    'otros':       'Anime & Pop Culture'
  };
  const productoDialog = document.getElementById('productoDialog');
  const productoDialogImagen = document.getElementById('productoDialogImagen');
  const productoDialogCategoria = document.getElementById('productoDialogCategoria');
  const productoDialogTitulo = document.getElementById('productoDialogTitulo');
  const productoDialogDescripcion = document.getElementById('productoDialogDescripcion');
  const productoDialogVariantes = document.getElementById('productoDialogVariantes');
  const productoDialogConsulta = document.getElementById('productoDialogConsulta');
  const productoDialogCerrar = productoDialog.querySelector('.producto-dialog-cerrar');
  let tarjetaActiva;
  let scrollAnterior = 0;
  let estilosBodyAntesDelDialog;

  // Íconos de colores para los marcos
  const COLOR_ICONS = {
    'Rojo':      '#D92727',
    'Azul':      '#1a6fbf',
    'Blanco':    '#FFFFFF',
    'Negro':     '#111111',
    'Dorado':    '#C9A84C',
    'Plateado':  '#A8A8A8'
  };

  function formatPrecio(precio) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(precio);
  }

  function crearPastillasColor(colores) {
    return colores.map(color => {
      const hex = COLOR_ICONS[color] || '#ccc';
      const borde = color === 'Blanco' ? 'border:1.5px solid #ccc;' : 'border:1.5px solid transparent;';
      return `<span class="color-pastilla" title="${color}" style="background:${hex};${borde}" aria-label="Color ${color}"></span>`;
    }).join('');
  }

  function crearVariantesHTML(variantes) {
    return variantes.map((v, i) => `
      <div class="variante-item${i === 0 ? ' variante-activa' : ''}" data-idx="${i}">
        <div class="variante-info">
          <div class="variante-header">
            <span class="variante-medida">${v.medida}</span>
            <span class="variante-tipo">${v.tipo}</span>
          </div>
          <div class="variante-colores">
            <span class="variante-colores-label">Colores:</span>
            <div class="colores-wrap">${crearPastillasColor(v.coloresMarco)}</div>
          </div>
        </div>
        <div class="variante-precio">${formatPrecio(v.precio)}</div>
      </div>
    `).join('');
  }

  function crearTarjetaProducto(producto) {
    const variantePrimaria = producto.variantes[0];

    const mensajeWA = encodeURIComponent(
      `Hola ARTGUN! Quisiera consultar por el cuadro "${producto.nombre}". ¿Podrían pasarme más información y disponibilidad?`
    );
    const urlWA = `https://wa.me/5492345683912?text=${mensajeWA}`;

    return `
      <article
        class="producto-card fade-in"
        data-id="${producto.id}"
        tabindex="0"
        aria-label="Ver detalles de ${producto.nombre}"
        aria-haspopup="dialog"
        aria-expanded="false"
      >

        <div class="producto-imagen-wrap">
          <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy"
          >
          <span class="producto-badge">${CATEGORIAS_LABELS[producto.categoria] || producto.categoria}</span>
          <div class="producto-imagen-overlay">
            <div class="overlay-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="producto-info">
          <p class="producto-categoria">${CATEGORIAS_LABELS[producto.categoria] || producto.categoria}</p>
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion}</p>

          <!-- Variantes de tamaño y marco -->
          <div class="variantes-wrap">
            ${crearVariantesHTML(producto.variantes)}
          </div>
        </div>

        <div class="producto-footer">
          <div class="producto-precio">
            <span class="desde">Desde</span>
            ${formatPrecio(variantePrimaria.precio)}
          </div>
        </div>

        <a
          href="${urlWA}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-whatsapp btn-whatsapp-full"
          aria-label="Consultar por WhatsApp — ${producto.nombre}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="producto-cta-completo">Pedir por WhatsApp</span>
          <span class="producto-cta-movil">Pedir</span>
        </a>

      </article>
    `;
  }

  function abrirDetalleProducto(producto, tarjeta) {
    tarjetaActiva = tarjeta;
    tarjetaActiva.setAttribute('aria-expanded', 'true');
    scrollAnterior = window.scrollY;
    estilosBodyAntesDelDialog = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      scrollBehavior: document.documentElement.style.scrollBehavior
    };
    productoDialogImagen.src = producto.imagen;
    productoDialogImagen.alt = producto.nombre;
    productoDialogCategoria.textContent = CATEGORIAS_LABELS[producto.categoria] || producto.categoria;
    productoDialogTitulo.textContent = producto.nombre;
    productoDialogDescripcion.textContent = producto.descripcion;
    productoDialogVariantes.innerHTML = producto.variantes.map(variante => `
      <div class="producto-dialog-variante">
        <div class="producto-dialog-variante-info">
          <strong>${variante.medida}</strong>
          <span>${variante.tipo}</span>
          <div class="producto-dialog-colores">
            <span>Colores:</span>
            ${crearPastillasColor(variante.coloresMarco)}
          </div>
        </div>
        <strong class="producto-dialog-precio">${formatPrecio(variante.precio)}</strong>
      </div>
    `).join('');
    productoDialogConsulta.href = `https://wa.me/5492345683912?text=${encodeURIComponent(
      `Hola ARTGUN! Quisiera consultar por el cuadro "${producto.nombre}" y sus tamaños y marcos disponibles.`
    )}`;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollAnterior}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    productoDialog.showModal();
    productoDialogCerrar.focus();
  }

  grid.addEventListener('click', event => {
    const tarjeta = event.target.closest('.producto-card[data-id]');
    if (!tarjeta || event.target.closest('a, button, input, select, label')) return;

    const producto = PRODUCTOS.find(item => String(item.id) === tarjeta.dataset.id);
    if (producto) abrirDetalleProducto(producto, tarjeta);
  });

  grid.addEventListener('keydown', event => {
    const tarjeta = event.target.closest('.producto-card[data-id]');
    if (!tarjeta || (event.key !== 'Enter' && event.key !== ' ')) return;
    if (event.target !== tarjeta) return;

    event.preventDefault();
    const producto = PRODUCTOS.find(item => String(item.id) === tarjeta.dataset.id);
    if (producto) abrirDetalleProducto(producto, tarjeta);
  });

  productoDialogCerrar.addEventListener('click', () => productoDialog.close());
  productoDialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      productoDialog.close();
    }
  });
  productoDialog.addEventListener('click', event => {
    if (event.target === productoDialog) productoDialog.close();
  });
  productoDialog.addEventListener('close', () => {
    const estilosRestaurados = estilosBodyAntesDelDialog;
    if (estilosRestaurados) {
      document.body.style.position = estilosRestaurados.position;
      document.body.style.top = estilosRestaurados.top;
      document.body.style.width = estilosRestaurados.width;
      document.body.style.overflow = estilosRestaurados.overflow;
      document.documentElement.style.scrollBehavior = 'auto';
    }

    window.requestAnimationFrame(() => {
      window.scrollTo(0, scrollAnterior);
      if (estilosRestaurados) {
        document.documentElement.style.scrollBehavior = estilosRestaurados.scrollBehavior;
        estilosBodyAntesDelDialog = null;
      }
      if (tarjetaActiva && tarjetaActiva.isConnected) {
        tarjetaActiva.setAttribute('aria-expanded', 'false');
        tarjetaActiva.focus({ preventScroll: true });
      }
    });
  });

  function crearTarjetaPersonalizada() {
    const opciones = Object.entries(VARIANTES).map(([id, variante]) => {
      const tipoMarco = variante.tipo.replace(/^Marco(?: de)? /i, '');
      const etiquetaMarco = tipoMarco.charAt(0).toUpperCase() + tipoMarco.slice(1);
      return `
        <option value="${id}">${variante.medida.replace(' cm', '')} · ${etiquetaMarco} · ${formatPrecio(variante.precio)}</option>
      `;
    }).join('');

    return `
      <article class="producto-card personalizado-card fade-in">
        <div class="producto-imagen-wrap personalizado-mockup">
          <span class="producto-badge">A tu gusto</span>
          <div class="personalizado-escena" aria-hidden="true">
            <div class="personalizado-cuadro">
              <img class="personalizado-preview" alt="Vista previa de tu imagen enmarcada" hidden>
              <div class="personalizado-placeholder">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="7" y="7" width="34" height="34" rx="2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="18" cy="18" r="3" stroke="currentColor" stroke-width="2"/>
                  <path d="m10 35 10-10 6 6 5-5 7 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>PON TU<br>IMAGEN AQUÍ</span>
              </div>
            </div>
            <span class="personalizado-luz"></span>
          </div>
          <span class="personalizado-mockup-caption">Tu foto, enmarcada</span>
        </div>

        <div class="producto-info">
          <p class="producto-categoria">Hecho para vos</p>
          <h3 class="producto-nombre">Tu imagen en un cuadro</h3>
          <p class="producto-descripcion">Elegí una foto o diseño y mirá cómo queda en nuestro mockup.</p>

          <label class="personalizado-upload" for="personalizadoArchivo">
            <input
              class="personalizado-file-input"
              id="personalizadoArchivo"
              type="file"
              accept="image/*"
              aria-describedby="personalizadoEstado"
            >
            <span class="personalizado-upload-icon" aria-hidden="true">＋</span>
            <span class="personalizado-upload-text">Elegir mi imagen</span>
          </label>
          <p class="personalizado-archivo" hidden></p>
          <p class="personalizado-estado" id="personalizadoEstado" role="status" aria-live="polite">
            La imagen se previsualiza solo en tu dispositivo.
          </p>

          <label class="personalizado-medida-label" for="personalizadoMedida">Tamaño y marco</label>
          <select class="personalizado-medida" id="personalizadoMedida">${opciones}</select>
          <p class="personalizado-nota">Al abrir WhatsApp, adjuntá allí la imagen para enviárnosla.</p>
        </div>

        <a
          class="btn btn-whatsapp btn-whatsapp-full personalizado-consulta"
          href="#seleccionar-imagen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar por WhatsApp por tu cuadro personalizado"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="personalizado-cta-completo">Consultar por WhatsApp</span>
          <span class="personalizado-cta-movil">Consultar</span>
        </a>
      </article>
    `;
  }

  function actualizarTarjetaPersonalizada() {
    const tarjeta = grid.querySelector('.personalizado-card');
    if (!tarjeta) return;

    const preview = tarjeta.querySelector('.personalizado-preview');
    const placeholder = tarjeta.querySelector('.personalizado-placeholder');
    const nombreArchivo = tarjeta.querySelector('.personalizado-archivo');
    const enlace = tarjeta.querySelector('.personalizado-consulta');
    const medida = tarjeta.querySelector('.personalizado-medida').value;
    const estado = tarjeta.querySelector('.personalizado-estado');

    if (imagenPersonalizada && urlImagenPersonalizada) {
      preview.src = urlImagenPersonalizada;
      preview.hidden = false;
      placeholder.hidden = true;
      nombreArchivo.textContent = imagenPersonalizada.name;
      nombreArchivo.hidden = false;
      enlace.href = `https://wa.me/5492345683912?text=${encodeURIComponent(
        `Hola ARTGUN! Quiero consultar por un cuadro personalizado con mi imagen. Elegí ${VARIANTES[medida].medida}, ${VARIANTES[medida].tipo} (${formatPrecio(VARIANTES[medida].precio)}). Voy a adjuntar la imagen en este chat.`
      )}`;
      enlace.classList.remove('personalizado-consulta-inactiva');
      estado.textContent = 'Vista previa lista. Tu imagen no se envía automáticamente.';
      return;
    }

    preview.removeAttribute('src');
    preview.hidden = true;
    placeholder.hidden = false;
    nombreArchivo.hidden = true;
    enlace.href = '#seleccionar-imagen';
    enlace.classList.add('personalizado-consulta-inactiva');
    estado.textContent = 'La imagen se previsualiza solo en tu dispositivo.';
  }

  function limpiarImagenPersonalizada() {
    if (urlImagenPersonalizada) URL.revokeObjectURL(urlImagenPersonalizada);
    imagenPersonalizada = null;
    urlImagenPersonalizada = '';
    actualizarTarjetaPersonalizada();
  }

  grid.addEventListener('change', event => {
    if (event.target.id === 'personalizadoArchivo') {
      const estado = grid.querySelector('.personalizado-estado');
      const archivo = event.target.files[0];
      if (!archivo) return;

      if (!archivo.type.startsWith('image/')) {
        limpiarImagenPersonalizada();
        estado.textContent = 'Elegí un archivo de imagen válido.';
        event.target.value = '';
        return;
      }

      if (archivo.size > 12 * 1024 * 1024) {
        limpiarImagenPersonalizada();
        estado.textContent = 'La imagen debe pesar menos de 12 MB.';
        event.target.value = '';
        return;
      }

      if (urlImagenPersonalizada) URL.revokeObjectURL(urlImagenPersonalizada);
      imagenPersonalizada = archivo;
      urlImagenPersonalizada = URL.createObjectURL(archivo);
      actualizarTarjetaPersonalizada();
    }

    if (event.target.id === 'personalizadoMedida') {
      actualizarTarjetaPersonalizada();
    }
  });

  grid.addEventListener('click', event => {
    const enlace = event.target.closest('.personalizado-consulta');
    if (!enlace || imagenPersonalizada) return;

    event.preventDefault();
    const estado = grid.querySelector('.personalizado-estado');
    estado.textContent = 'Primero elegí una imagen para personalizar tu cuadro.';
    grid.querySelector('#personalizadoArchivo').focus();
  });

  window.addEventListener('beforeunload', () => {
    if (urlImagenPersonalizada) URL.revokeObjectURL(urlImagenPersonalizada);
  });

  function renderizarProductos() {
    const productosFiltrados = PRODUCTOS.filter(p => {
      const matchCategoria = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
      const matchBusqueda  = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                             p.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
      return matchCategoria && matchBusqueda;
    });

    const busquedaPersonalizada = /personal|imagen|foto|tu cuadro/.test(textoBusqueda.toLowerCase());
    const mostrarPersonalizada = !textoBusqueda || busquedaPersonalizada;

    if (productosFiltrados.length === 0 && !mostrarPersonalizada) {
      grid.innerHTML = `
        <div class="sin-resultados">
          <div class="icono">🎨</div>
          <h3>Sin Resultados</h3>
          <p>No encontramos cuadros que coincidan con tu búsqueda.<br>Intentá con otro término o categoría.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = productosFiltrados.map(crearTarjetaProducto).join('') +
      (mostrarPersonalizada ? crearTarjetaPersonalizada() : '');
    actualizarTarjetaPersonalizada();

    // Fade-in escalonado
    requestAnimationFrame(() => {
      grid.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 60);
      });
    });
  }

  /* =============================
     FILTROS
     ============================= */
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      categoriaActiva = btn.dataset.categoria;
      renderizarProductos();
    });
  });

  /* =============================
     BUSCADOR
     ============================= */
  const buscador = document.getElementById('buscador');
  let debounceTimer;

  buscador.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      textoBusqueda = e.target.value.trim();
      renderizarProductos();
    }, 280);
  });

  /* =============================
     OBSERVER — FADE IN
     ============================= */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* =============================
     RENDERIZADO INICIAL
     ============================= */
  renderizarProductos();

  /* =============================
     NAVEGACIÓN SUAVE
     ============================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const targetY = target.getBoundingClientRect().top + window.pageYOffset - 84;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

  /* =============================
     PARALLAX HERO LEVE
     ============================= */
  const heroImg = document.querySelector('.hero-image-col img');
  if (heroImg && window.matchMedia('(min-width: 1024px)').matches) {
    window.addEventListener('scroll', () => {
      heroImg.style.transform = `translateY(${window.pageYOffset * 0.2}px)`;
    }, { passive: true });
  }

  /* =============================
     CONTADORES ANIMADOS
     ============================= */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, 20);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target), el.dataset.suffix || '');
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

});
