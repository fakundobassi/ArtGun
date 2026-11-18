/**
 * ARTGUN — Archivo de datos del catálogo
 * =========================================
 * Para agregar, editar o eliminar productos,
 * simplemente modifica este array de objetos.
 *
 * Campos de cada producto:
 *  - id: número único del producto
 *  - nombre: nombre del cuadro
 *  - descripcion: descripción breve
 *  - categoria: "abstracto" | "minimalista" | "vintage" | "naturaleza" | "cine-musica" | "fotografia" | "tipografico" | "otros"
 *  - precio: precio en pesos argentinos (número)
 *  - medidas: array de strings con medidas disponibles
 *  - imagen: ruta a la imagen (relativa a la raíz del proyecto)
 *  - disponible: true | false
 */

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Geometría en Rojo",
    descripcion: "Composición geométrica de alto impacto con formas dinámicas sobre fondo negro.",
    categoria: "abstracto",
    precio: 8500,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm"],
    imagen: "img/producto_abstracto_1.png",
    disponible: true
  },
  {
    id: 2,
    nombre: "New York Typeset",
    descripcion: "Diseño tipográfico editorial en blanco y negro. Ideal para ambientes modernos.",
    categoria: "tipografico",
    precio: 7200,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm", "60x80 cm"],
    imagen: "img/producto_tipografico_1.png",
    disponible: true
  },
  {
    id: 3,
    nombre: "Mountain Vista",
    descripcion: "Lámina vintage de montaña con estética de parque nacional norteamericano.",
    categoria: "vintage",
    precio: 9000,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm"],
    imagen: "img/producto_vintage_1.png",
    disponible: true
  },
  {
    id: 4,
    nombre: "Botanica Verde",
    descripcion: "Ilustración botánica minimalista con hojas tropicales en tinta sobre fondo crema.",
    categoria: "naturaleza",
    precio: 7800,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm"],
    imagen: "img/producto_naturaleza_1.png",
    disponible: true
  },
  {
    id: 5,
    nombre: "Frame by Frame",
    descripcion: "Homenaje al cine clásico. Diseño minimalista con cámara cinematográfica vintage.",
    categoria: "cine-musica",
    precio: 8200,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm"],
    imagen: "img/producto_cine_1.png",
    disponible: true
  },
  {
    id: 6,
    nombre: "Niebla y Luz",
    descripcion: "Fotografía artística en blanco y negro de bosque brumoso con rayos de luz.",
    categoria: "fotografia",
    precio: 10500,
    medidas: ["40x50 cm", "50x70 cm", "60x80 cm", "70x100 cm"],
    imagen: "img/producto_foto_1.png",
    disponible: true
  },
  {
    id: 7,
    nombre: "Círculo Zen",
    descripcion: "Composición ultra minimalista. Un solo círculo perfecto sobre fondo blanco.",
    categoria: "minimalista",
    precio: 6500,
    medidas: ["30x30 cm", "40x40 cm", "50x50 cm"],
    imagen: "img/producto_minimalista_demo.png",
    disponible: true
  },
  {
    id: 8,
    nombre: "Abstract Shapes II",
    descripcion: "Serie abstracta con formas orgánicas y paleta de colores contemporánea.",
    categoria: "abstracto",
    precio: 8800,
    medidas: ["30x40 cm", "40x50 cm", "50x70 cm"],
    imagen: "img/producto_abstracto_1.png",
    disponible: true
  }
];
