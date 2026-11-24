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
 *  - categoria: "cine-musica" | "otros"
 *  - variantes: array de objetos { medida, precio, tipo, coloresMarco }
 *  - imagen: ruta a la imagen (relativa a la raíz del proyecto)
 *  - disponible: true | false
 *
 * TIPOS DE MARCO:
 *  - "plastico"   → 30x40 cm · $27.000 · Colores: rojo, azul, blanco, negro
 *  - "enchapado"  → 40x50 cm · $35.000 · Colores: dorado, plateado
 */

const VARIANTES = {
  plastico: {
    medida: "30x40 cm",
    precio: 27000,
    tipo: "Marco de plástico",
    coloresMarco: ["Rojo", "Azul", "Blanco", "Negro"]
  },
  enchapado: {
    medida: "40x50 cm",
    precio: 35000,
    tipo: "Marco enchapado",
    coloresMarco: ["Dorado", "Plateado"]
  }
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Babasónicos",
    descripcion: "Póster editorial en blanco y negro de la banda argentina Babasónicos. Tipografía bold con código Spotify integrado.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/Babasonicos_3.jpg",
    disponible: true
  },
  {
    id: 2,
    nombre: "Charly — Say No More",
    descripcion: "Diseño neon de Charly García con estética urbana. Tipografía violeta y tono azul intenso. Edición especial.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/charly neon.jpg",
    disponible: true
  },
  {
    id: 3,
    nombre: "Eminem",
    descripcion: "Póster icónico de Eminem en blanco y negro con marco rojo. Tipografía espejada característica del artista.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/eminem.png",
    disponible: true
  },
  {
    id: 4,
    nombre: "Freezer — The End of Namek",
    descripcion: "Lámina estilo vintage de Dragon Ball Z. La épica batalla en el Planeta Namek. Arte de colección para fanáticos.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/feezer cabeza.jpg",
    disponible: true
  },
  {
    id: 5,
    nombre: "Gohan SSJ2",
    descripcion: "Arte digital de Gohan Super Saiyan 2 en su mítica transformación. Colores intensos y composición dinámica.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/gohan enojado.jpg",
    disponible: true
  },
  {
    id: 6,
    nombre: "Haunter #093",
    descripcion: "Póster estilo manga japonés del Pokémon Haunter. Diseño retro con tipografía bold y paleta violeta y rosa.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/hunter.jpg",
    disponible: true
  },
  {
    id: 7,
    nombre: "Michael Jackson — White Edition",
    descripcion: "Diseño editorial minimalista de Michael Jackson en traje blanco. Gran tipografía sobre fondo claro. Elegante.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/michael jackson blancoo.jpg",
    disponible: true
  },
  {
    id: 8,
    nombre: "King of Pop — Red Edition",
    descripcion: "Póster de Michael Jackson estilo afiche clásico. Fondo rojo impactante con silueta icónica. King of Pop.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/michael rojoo.jpg",
    disponible: true
  },
  {
    id: 9,
    nombre: "Luca Prodan",
    descripcion: "Homenaje a Luca Prodan y Sumo con estética rockera en rojo, blanco y negro.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagen: "img/productos/Luca Prodan.png",
    disponible: true
  }
];
