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
 *  - imagenPrincipal: ruta a la imagen principal (relativa a la raíz)
 *  - imagenSecundaria: ruta a una segunda imagen, si está disponible
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
    imagenPrincipal: "img/productos/Babasonicos_3.jpg",
    disponible: true
  },
  {
    id: 2,
    nombre: "Charly — Say No More",
    descripcion: "Diseño neon de Charly García con estética urbana. Tipografía violeta y tono azul intenso. Edición especial.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/charly neon 3.jpg",
    imagenSecundaria: "img/productos/charly neon.png",
    disponible: true
  },
  {
    id: 3,
    nombre: "Eminem",
    descripcion: "Póster icónico de Eminem en blanco y negro con marco rojo. Tipografía espejada característica del artista.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/eminem 3.png",
    imagenSecundaria: "img/productos/Eminem.png",
    disponible: true
  },
  {
    id: 4,
    nombre: "Freezer — The End of Namek",
    descripcion: "Lámina estilo vintage de Dragon Ball Z. La épica batalla en el Planeta Namek. Arte de colección para fanáticos.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/feezer cabeza 3.jpg",
    imagenSecundaria: "img/productos/feezer cabeza.png",
    disponible: true
  },
  {
    id: 5,
    nombre: "Gohan SSJ2",
    descripcion: "Arte digital de Gohan Super Saiyan 2 en su mítica transformación. Colores intensos y composición dinámica.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/gohan enojado 3.jpg",
    imagenSecundaria: "img/productos/gohan enojado.png",
    disponible: true
  },
  {
    id: 6,
    nombre: "Haunter #093",
    descripcion: "Póster estilo manga japonés del Pokémon Haunter. Diseño retro con tipografía bold y paleta violeta y rosa.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/hunter 3.jpg",
    imagenSecundaria: "img/productos/hunter.png",
    disponible: true
  },
  {
    id: 7,
    nombre: "Michael Jackson — White Edition",
    descripcion: "Diseño editorial minimalista de Michael Jackson en traje blanco. Gran tipografía sobre fondo claro. Elegante.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/michael jackson blancoo 3.jpg",
    imagenSecundaria: "img/productos/michael jackson blanco.jpg",
    disponible: true
  },
  {
    id: 8,
    nombre: "King of Pop — Red Edition",
    descripcion: "Póster de Michael Jackson estilo afiche clásico. Fondo rojo impactante con silueta icónica. King of Pop.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/michael rojoo 3.jpg",
    imagenSecundaria: "img/productos/michael rojo.jpg",
    disponible: true
  },
  {
    id: 9,
    nombre: "Luca Prodan",
    descripcion: "Homenaje a Luca Prodan y Sumo con estética rockera en rojo, blanco y negro.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/Luca Prodan 3.png",
    imagenSecundaria: "img/productos/Luca Prodan.png",
    disponible: true
  },
  {
    id: 10,
    nombre: "Bad Bunny — DeBÍ TiRAR MáS FOToS",
    descripcion: "Póster inspirado en DeBÍ TiRAR MáS FOToS, con composición fotográfica y paleta verde.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/Bad_Bunny_DeBi_Tirar_Mas_Fotos_3.png",
    imagenSecundaria: "img/productos/Bad_Bunny_DeBi_Tirar_Mas_Fotos.png",
    disponible: true
  },
  {
    id: 11,
    nombre: "Messi — La Tribuna",
    descripcion: "Lionel Messi en el campo de juego, frente a una tribuna celeste y blanca.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/messi tribuna 3.jpg",
    imagenSecundaria: "img/productos/messi tribuna 1.jpg",
    disponible: true
  },
  {
    id: 12,
    nombre: "Michael Jackson — Gold Edition",
    descripcion: "Homenaje a Michael Jackson con estética de concierto y detalles dorados.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/michael gold mockup 3.jpg",
    disponible: true
  },
  {
    id: 13,
    nombre: "Kurt Cobain — Nirvana",
    descripcion: "Homenaje a Kurt Cobain con un retrato en blanco y negro y el icónico símbolo de Nirvana.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/kurt 3.jpg",
    imagenSecundaria: "img/productos/kurt.jpg",
    disponible: true
  },
  {
    id: 14,
    nombre: "Lionel Messi — Copa del Mundo",
    descripcion: "Lionel Messi celebrando junto a la Copa del Mundo, en una escena de festejo celeste y blanco.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/Lionel_Messi_Copa_Del_Mundo_3.png",
    imagenSecundaria: "img/productos/Lionel_Messi_Copa_Del_Mundo_1.png",
    disponible: true
  },
  {
    id: 15,
    nombre: "Pink Floyd — Wish You Were Here",
    descripcion: "Homenaje a Pink Floyd y al álbum Wish You Were Here, con una estética clásica y nostálgica.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/pink floyd 3.jpg",
    imagenSecundaria: "img/productos/pink floyd 1.jpg",
    disponible: true
  },
  {
    id: 16,
    nombre: "Patricio Rey y sus Redonditos de Ricota",
    descripcion: "Póster dedicado a Patricio Rey y sus Redonditos de Ricota, con arte en blanco, negro y rojo.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/pr 3.jpg",
    imagenSecundaria: "img/productos/pr1.jpg",
    disponible: true
  },
  {
    id: 17,
    nombre: "Bad Bunny — Un Verano Sin Ti",
    descripcion: "Póster inspirado en Un Verano Sin Ti, con colores vibrantes y una ilustración veraniega.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/Un Verano Sin Ti - Bad Bunny 3.jpg",
    imagenSecundaria: "img/productos/Un Verano Sin Ti - Bad Bunny  1.jpg",
    disponible: true
  },
  {
    id: 18,
    nombre: "Perón y Evita — La patria es el otro",
    descripcion: "Lámina de Juan Domingo Perón y Eva Perón con los colores celeste y blanco y la frase «La patria es el otro».",
    categoria: "politica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/productos/Peron_Evita_La_Patria_Es_El_Otro_3.jpg",
    imagenSecundaria: "img/productos/Peron_Evita_La_Patria_Es_El_Otro_.jpg",
    disponible: true
  }
];
