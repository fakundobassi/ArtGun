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
    imagenPrincipal: "img/optimizadas/productos/Babasonicos_3.webp",
    imagenSecundaria: "img/optimizadas/productos/Babasonicos_1.webp",
    disponible: true
  },
  {
    id: 2,
    nombre: "Charly — Say No More",
    descripcion: "Diseño neon de Charly García con estética urbana. Tipografía violeta y tono azul intenso. Edición especial.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/charly neon 3.webp",
    imagenSecundaria: "img/optimizadas/productos/charly neon.webp",
    disponible: true
  },
  {
    id: 3,
    nombre: "Eminem",
    descripcion: "Póster icónico de Eminem en blanco y negro con marco rojo. Tipografía espejada característica del artista.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/eminem 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Eminem.webp",
    disponible: true
  },
  {
    id: 4,
    nombre: "Freezer — The End of Namek",
    descripcion: "Lámina estilo vintage de Dragon Ball Z. La épica batalla en el Planeta Namek. Arte de colección para fanáticos.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/feezer cabeza 3.webp",
    imagenSecundaria: "img/optimizadas/productos/feezer cabeza.webp",
    disponible: true
  },
  {
    id: 5,
    nombre: "Gohan SSJ2",
    descripcion: "Arte digital de Gohan Super Saiyan 2 en su mítica transformación. Colores intensos y composición dinámica.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/gohan enojado 3.webp",
    imagenSecundaria: "img/optimizadas/productos/gohan enojado.webp",
    disponible: true
  },
  {
    id: 6,
    nombre: "Haunter #093",
    descripcion: "Póster estilo manga japonés del Pokémon Haunter. Diseño retro con tipografía bold y paleta violeta y rosa.",
    categoria: "otros",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/hunter 3.webp",
    imagenSecundaria: "img/optimizadas/productos/hunter.webp",
    disponible: true
  },
  {
    id: 7,
    nombre: "Michael Jackson — White Edition",
    descripcion: "Diseño editorial minimalista de Michael Jackson en traje blanco. Gran tipografía sobre fondo claro. Elegante.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/michael jackson blancoo 3.webp",
    imagenSecundaria: "img/optimizadas/productos/michael jackson blanco.webp",
    disponible: true
  },
  {
    id: 8,
    nombre: "King of Pop — Red Edition",
    descripcion: "Póster de Michael Jackson estilo afiche clásico. Fondo rojo impactante con silueta icónica. King of Pop.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/michael rojoo 3.webp",
    imagenSecundaria: "img/optimizadas/productos/michael rojo.webp",
    disponible: true
  },
  {
    id: 9,
    nombre: "Luca Prodan",
    descripcion: "Homenaje a Luca Prodan y Sumo con estética rockera en rojo, blanco y negro.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Luca Prodan 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Luca Prodan.webp",
    disponible: true
  },
  {
    id: 10,
    nombre: "Bad Bunny — DeBÍ TiRAR MáS FOToS",
    descripcion: "Póster inspirado en DeBÍ TiRAR MáS FOToS, con composición fotográfica y paleta verde.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Bad_Bunny_DeBi_Tirar_Mas_Fotos_3.webp",
    imagenSecundaria: "img/optimizadas/productos/Bad_Bunny_DeBi_Tirar_Mas_Fotos.webp",
    disponible: true
  },
  {
    id: 11,
    nombre: "Messi — La Tribuna",
    descripcion: "Lionel Messi en el campo de juego, frente a una tribuna celeste y blanca.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/messi tribuna 3.webp",
    imagenSecundaria: "img/optimizadas/productos/messi tribuna 1.webp",
    disponible: true
  },
  {
    id: 12,
    nombre: "Michael Jackson — Gold Edition",
    descripcion: "Homenaje a Michael Jackson con estética de concierto y detalles dorados.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/michael gold mockup 3.webp",
    disponible: true
  },
  {
    id: 13,
    nombre: "Kurt Cobain — Nirvana",
    descripcion: "Homenaje a Kurt Cobain con un retrato en blanco y negro y el icónico símbolo de Nirvana.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/kurt 3.webp",
    imagenSecundaria: "img/optimizadas/productos/kurt.webp",
    disponible: true
  },
  {
    id: 14,
    nombre: "Lionel Messi — Copa del Mundo",
    descripcion: "Lionel Messi celebrando junto a la Copa del Mundo, en una escena de festejo celeste y blanco.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Lionel_Messi_Copa_Del_Mundo_3.webp",
    imagenSecundaria: "img/optimizadas/productos/Lionel_Messi_Copa_Del_Mundo_1.webp",
    disponible: true
  },
  {
    id: 15,
    nombre: "Pink Floyd — Wish You Were Here",
    descripcion: "Homenaje a Pink Floyd y al álbum Wish You Were Here, con una estética clásica y nostálgica.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/pink floyd 3.webp",
    imagenSecundaria: "img/optimizadas/productos/pink floyd 1.webp",
    disponible: true
  },
  {
    id: 16,
    nombre: "Patricio Rey y sus Redonditos de Ricota",
    descripcion: "Póster dedicado a Patricio Rey y sus Redonditos de Ricota, con arte en blanco, negro y rojo.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/pr 3.webp",
    imagenSecundaria: "img/optimizadas/productos/pr1.webp",
    disponible: true
  },
  {
    id: 17,
    nombre: "Bad Bunny — Un Verano Sin Ti",
    descripcion: "Póster inspirado en Un Verano Sin Ti, con colores vibrantes y una ilustración veraniega.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Un Verano Sin Ti - Bad Bunny 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Un Verano Sin Ti - Bad Bunny  1.webp",
    disponible: true
  },
  {
    id: 18,
    nombre: "Perón y Evita — La patria es el otro",
    descripcion: "Lámina de Juan Domingo Perón y Eva Perón con los colores celeste y blanco y la frase «La patria es el otro».",
    categoria: "politica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Peron_Evita_La_Patria_Es_El_Otro_3.webp",
    imagenSecundaria: "img/optimizadas/productos/Peron_Evita_La_Patria_Es_El_Otro_.webp",
    disponible: true
  },
  {
    id: 19,
    nombre: "Bad Bunny — Benito",
    descripcion: "Póster de Bad Bunny con la frase «The only thing more powerful than hate is love» y la bandera de Puerto Rico.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/bad bunny benito 3.webp",
    imagenSecundaria: "img/optimizadas/productos/bad bunny benito.webp",
    disponible: true
  },
  {
    id: 20,
    nombre: "La Bombonera",
    descripcion: "Lámina ilustrada del estadio Alberto J. Armando, ícono del fútbol y de la ciudad de Buenos Aires.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/La_Bombonera_3.webp",
    imagenSecundaria: "img/optimizadas/productos/La_Bombonera_1.webp",
    disponible: true
  },
  {
    id: 21,
    nombre: "Lionel Messi — Ídolo",
    descripcion: "Póster homenaje a Lionel Messi y su historia con la Selección Argentina.",
    categoria: "deportes",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/messi poster 3.webp",
    imagenSecundaria: "img/optimizadas/productos/messi poster.webp",
    disponible: true
  },
  {
    id: 22,
    nombre: "Babasónicos — Disco",
    descripcion: "Póster editorial dedicado a Babasónicos, con retratos de la banda y diseño inspirado en un disco.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/babasonicos disco 3.webp",
    imagenSecundaria: "img/optimizadas/productos/babasonicos disco 1.webp",
    disponible: true
  },
  {
    id: 23,
    nombre: "Cristina Fernández de Kirchner",
    descripcion: "Lámina homenaje a Cristina Fernández de Kirchner con retrato y estética celeste y blanca.",
    categoria: "politica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Cristina_Fernandez_de_Kirchner_3.webp",
    imagenSecundaria: "img/optimizadas/productos/Cristina_Fernandez_de_Kirchner_1.webp",
    disponible: true
  },
  {
    id: 24,
    nombre: "Duki — SSJ",
    descripcion: "Póster de Duki con estética inspirada en Dragon Ball y su etapa musical SSJ.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Duki SSJ Poster 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Duki SSJ Poster 1.webp",
    disponible: true
  },
  {
    id: 25,
    nombre: "Los Redondos — Preso de la ilusión",
    descripcion: "Lámina inspirada en Los Redondos y la frase «Preso de la ilusión, vas a bailar».",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Poster Los Redondos 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Poster Los Redondos 1.webp",
    disponible: true
  },
  {
    id: 26,
    nombre: "Los Redondos — Ángel de la soledad",
    descripcion: "Póster inspirado en «Ángel de la soledad», canción de Patricio Rey y sus Redonditos de Ricota.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/angel de la soledad 3.webp",
    imagenSecundaria: "img/optimizadas/productos/angel de la soledad.webp",
    disponible: true
  },
  {
    id: 27,
    nombre: "Daddy Yankee — Leyenda del reguetón",
    descripcion: "Homenaje a Daddy Yankee y su trayectoria como una de las grandes leyendas del reguetón.",
    categoria: "cine-musica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/Leyenda del reguetón_ Daddy Yankee 3.webp",
    imagenSecundaria: "img/optimizadas/productos/Leyenda del reguetón_ Daddy Yankee.webp",
    disponible: true
  },
  {
    id: 28,
    nombre: "Javier Milei",
    descripcion: "Lámina de Javier Milei con los colores y el sol de la bandera argentina.",
    categoria: "politica",
    variantes: [VARIANTES.plastico, VARIANTES.enchapado],
    imagenPrincipal: "img/optimizadas/productos/milei 3.webp",
    imagenSecundaria: "img/optimizadas/productos/milei 1.webp",
    disponible: true
  }
];
