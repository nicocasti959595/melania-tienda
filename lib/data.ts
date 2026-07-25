export type Categoria = "Vestidos" | "Blusas" | "Pantalones" | "Sweaters" | "Abrigos" | "Accesorios";

export const colecciones: { titulo: string; copy: string; img: string; tag: string }[] = [
  {
    titulo: "Otoño en la ciudad",
    copy: "Lanas livianas, paletas tierra y siluetas fluidas para los días intermedios.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80",
    tag: "Nueva temporada",
  },
  {
    titulo: "Esenciales Melania",
    copy: "El fondo de placard: prendas atemporales en cortes que favorecen a todas.",
    img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?auto=format&fit=crop&w=1400&q=80",
    tag: "Always on",
  },
  {
    titulo: "Noches de bordó",
    copy: "Vestidos y satenes para salir. Detalles dorados y caídas pensadas.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80",
    tag: "Edición limitada",
  },
];

export type Color = { nombre: string; hex: string };

export type Producto = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  /** Precio de lista. 0 = "a consultar" (no comprable). */
  precio: number;
  /** Precio promocional. Hay oferta si > 0 y < precio. */
  precioOferta?: number;
  imgs: string[];
  destacado?: boolean;
  stock: boolean;
  detalle: string;
  descripcion: string;
  talles: string[];
  tallesAgotados?: string[];
  colores: Color[];
  composicion: string;
};

const U = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const productos: Producto[] = [
  {
    slug: "vestido-mila",
    nombre: "Vestido Mila",
    categoria: "Vestidos",
    precio: 92000,
    precioOferta: 78900,
    imgs: [U("1572804013309-59a88b7e92f1"), U("1595777457583-95e059d581b8"), U("1496747611176-843222e1e57c"), U("1515372039744-b8f02a3ae446")],
    destacado: true,
    stock: true,
    detalle: "Vestido midi de viscosa, cuello en V, manga ¾.",
    descripcion:
      "Un midi que resuelve el día entero: cae suave, no se marca y pasa de la oficina a la noche cambiando sólo los zapatos. Viscosa con caída, cuello en V favorecedor y manga ¾ que estiliza el brazo.",
    talles: ["XS", "S", "M", "L", "XL"],
    tallesAgotados: ["XS"],
    colores: [
      { nombre: "Bordó", hex: "#7a1c2e" },
      { nombre: "Negro", hex: "#1c1c1c" },
      { nombre: "Camel", hex: "#b8895a" },
    ],
    composicion: "100% viscosa · Lavado a mano en frío",
  },
  {
    slug: "blusa-clara",
    nombre: "Blusa Clara",
    categoria: "Blusas",
    precio: 42500,
    imgs: [U("1551163943-3f7253a97c64"), U("1564257631407-4deb1f99d992"), U("1485462537746-965f33f7f6a7")],
    stock: true,
    detalle: "Blusa de seda lavada, escote redondo y mangas francesas.",
    descripcion:
      "La blusa que se pone sola. Seda lavada con caída fluida, escote redondo limpio y manga francesa. Va con jean de día y con sastrero de noche.",
    talles: ["S", "M", "L"],
    colores: [
      { nombre: "Crema", hex: "#f3e8e1" },
      { nombre: "Rosa viejo", hex: "#e8c8c1" },
    ],
    composicion: "92% seda · 8% elastano",
  },
  {
    slug: "pantalon-alma",
    nombre: "Pantalón Alma",
    categoria: "Pantalones",
    precio: 56900,
    imgs: [U("1473966968600-fa801b869a1a"), U("1594633312681-425c7b97ccd1"), U("1509551388413-e18d0ac5d495"), U("1552902865-b72c031ac5ea")],
    stock: true,
    detalle: "Pantalón sastrero de tiro alto, pinzas y caída perfecta.",
    descripcion:
      "Sastrero de tiro alto con pinzas al frente y pierna recta. La tela tiene cuerpo: no se arruga y marca la cintura sin apretar. El básico que más se usa del placard.",
    talles: ["36", "38", "40", "42", "44"],
    tallesAgotados: ["44"],
    colores: [
      { nombre: "Negro", hex: "#1c1c1c" },
      { nombre: "Camel", hex: "#b8895a" },
      { nombre: "Gris topo", hex: "#8a7f7a" },
    ],
    composicion: "68% poliéster · 30% viscosa · 2% elastano",
  },
  {
    slug: "sweater-aurora",
    nombre: "Sweater Aurora",
    categoria: "Sweaters",
    precio: 64900,
    imgs: [U("1583744946564-b52ac1c389c8"), U("1576871337622-98d48d1cf531"), U("1434389677669-e08b4cac3105")],
    destacado: true,
    stock: true,
    detalle: "Lana fría 100%, escote bote, calce relajado.",
    descripcion:
      "Lana fría de tacto suave, escote bote y calce relajado sin quedar enorme. Abriga sin volumen y se lava en casa.",
    talles: ["Único"],
    colores: [
      { nombre: "Crema", hex: "#f3e8e1" },
      { nombre: "Bordó", hex: "#7a1c2e" },
    ],
    composicion: "100% lana fría",
  },
  {
    slug: "trench-rio",
    nombre: "Trench Río",
    categoria: "Abrigos",
    precio: 132000,
    imgs: [U("1591047139829-d91aecb6caea"), U("1539533018447-63fcce2678e3"), U("1544022613-e87ca75a784a"), U("1487222477894-8943e31ef7b2")],
    stock: true,
    detalle: "Trench impermeable largo, cinto al tono, forrado.",
    descripcion:
      "Trench largo impermeable, forrado y con cinto al tono. Tapa cualquier look y sobrevive a la lluvia de Buenos Aires sin perder la forma.",
    talles: ["S", "M", "L"],
    colores: [
      { nombre: "Camel", hex: "#b8895a" },
      { nombre: "Verde oliva", hex: "#5d6047" },
    ],
    composicion: "Exterior 100% poliamida · Forro 100% viscosa",
  },
  {
    slug: "vestido-frida",
    nombre: "Vestido Frida",
    categoria: "Vestidos",
    precio: 89500,
    imgs: [U("1502716119720-b23a93e5fe1b"), U("1566174053879-31528523f8ae"), U("1518709268805-4e9042af9f23")],
    destacado: true,
    stock: true,
    detalle: "Vestido satinado bordó, espalda al aire, breteles regulables.",
    descripcion:
      "Satén bordó con espalda al aire y breteles regulables. Cae en bies, así que acompaña el cuerpo sin marcar. Para las noches en que querés que la prenda hable.",
    talles: ["XS", "S", "M", "L"],
    colores: [
      { nombre: "Bordó", hex: "#7a1c2e" },
      { nombre: "Negro", hex: "#1c1c1c" },
    ],
    composicion: "100% poliéster satinado · Lavado en seco",
  },
  {
    slug: "jean-luz",
    nombre: "Jean Luz",
    categoria: "Pantalones",
    precio: 52900,
    imgs: [U("1604176354204-9268737828e4"), U("1541099649105-f69ad21f3246"), U("1542272604-787c3835535d")],
    stock: true,
    detalle: "Jean wide leg de tiro alto, denim rígido azul medio.",
    descripcion:
      "Wide leg de tiro alto en denim rígido: no se deforma con el uso y alarga la pierna. Azul medio, el tono que combina con todo.",
    talles: ["36", "38", "40", "42"],
    colores: [{ nombre: "Azul medio", hex: "#41608c" }],
    composicion: "100% algodón",
  },
  {
    slug: "camisa-sol",
    nombre: "Camisa Sol",
    categoria: "Blusas",
    precio: 46500,
    imgs: [U("1551803091-e20673f15770"), U("1598554747436-c9293d6a588f"), U("1596755094514-f87e34085b2c")],
    stock: false,
    detalle: "Camisa de lino oversize, ideal para layering.",
    descripcion:
      "Lino puro con calce oversize. Se usa cerrada, abierta sobre una musculosa o atada a la cintura. Tres prendas en una.",
    talles: ["S", "M", "L"],
    colores: [
      { nombre: "Blanco", hex: "#f7f4f1" },
      { nombre: "Arena", hex: "#d8c3a5" },
    ],
    composicion: "100% lino",
  },
  {
    slug: "tapado-noa",
    nombre: "Tapado Noa",
    categoria: "Abrigos",
    precio: 195000,
    precioOferta: 168000,
    imgs: [U("1539109136881-3be0616acf4b"), U("1548624313-0396c75f8f1d"), U("1591047139829-d91aecb6caea"), U("1520975954732-35dd22299614")],
    stock: true,
    detalle: "Tapado largo en paño doble faz, color camel.",
    descripcion:
      "Paño doble faz, sin forro y sin costuras a la vista. Es la pieza de inversión de la temporada: abriga de verdad y no pasa de moda.",
    talles: ["S", "M", "L"],
    tallesAgotados: ["S"],
    colores: [
      { nombre: "Camel", hex: "#b8895a" },
      { nombre: "Gris topo", hex: "#8a7f7a" },
    ],
    composicion: "80% lana · 20% poliamida",
  },
  {
    slug: "cartera-elena",
    nombre: "Cartera Elena",
    categoria: "Accesorios",
    precio: 58900,
    imgs: [U("1591561954557-26941169b49e"), U("1584917865442-de89df76afd3"), U("1566150905458-1bf1fc113f0d")],
    stock: true,
    detalle: "Bandolera de cuero, cierre dorado, interior con bolsillo.",
    descripcion:
      "Cuero vacuno argentino con herrajes dorados. Entra el celular, la billetera y las llaves — no más. Bandolera regulable para usar cruzada o al hombro.",
    talles: ["Único"],
    colores: [
      { nombre: "Suela", hex: "#9c6b48" },
      { nombre: "Negro", hex: "#1c1c1c" },
    ],
    composicion: "100% cuero vacuno · Herrajes dorados",
  },
  {
    slug: "sweater-margot",
    nombre: "Sweater Margot",
    categoria: "Sweaters",
    precio: 71900,
    imgs: [U("1576566588028-4147f3842f27"), U("1611911813383-67769b37a149"), U("1620799140408-edc6dcb6d633")],
    stock: true,
    detalle: "Lana merino canalé, cuello alto, tonos crema.",
    descripcion:
      "Merino canalé con cuello alto. La lana merino no pica y regula la temperatura: sirve tanto en mayo como en agosto.",
    talles: ["S", "M", "L"],
    colores: [
      { nombre: "Crema", hex: "#f3e8e1" },
      { nombre: "Gris topo", hex: "#8a7f7a" },
    ],
    composicion: "100% lana merino",
  },
  {
    slug: "panuelo-amelie",
    nombre: "Pañuelo Amélie",
    categoria: "Accesorios",
    // Pieza de autor: precio a consultar.
    precio: 0,
    imgs: [U("1601924994987-69e26d50dc26"), U("1522312346375-d1a52e2b99b3")],
    stock: true,
    detalle: "Pañuelo estampado, 90x90 cm, terminación a mano.",
    descripcion:
      "Serie corta estampada a mano por una diseñadora del barrio. Cada pieza tiene una variación mínima de color, así que ninguna es igual a otra. Consultanos disponibilidad y estampas.",
    talles: ["Único"],
    colores: [
      { nombre: "Bordó", hex: "#7a1c2e" },
      { nombre: "Verde oliva", hex: "#5d6047" },
    ],
    composicion: "100% seda · 90 × 90 cm",
  },
];

export const categorias: Categoria[] = ["Vestidos", "Blusas", "Pantalones", "Sweaters", "Abrigos", "Accesorios"];

export const getProducto = (slug: string) => productos.find((p) => p.slug === slug);

export const beneficios = [
  { t: "Asesoramiento real", d: "Te ayudamos a armar el look. Cambios sin vuelta y atención cara a cara." },
  { t: "Envíos rápidos", d: "CABA y GBA en 24/48 hs. Todo el país por Andreani y Correo Argentino." },
  { t: "3 cuotas sin interés", d: "Con todas las tarjetas. También Mercado Pago, débito y transferencia." },
  { t: "Curaduría local", d: "Marcas argentinas seleccionadas + capsulas propias de Villa Urquiza." },
];

export const testimonios = [
  { n: "Sofía R.", c: "Vine por un vestido y me fui con tres looks armados. Atención impecable." },
  { n: "Mariana L.", c: "La calidad de las prendas se nota. Y los cortes favorecen un montón." },
  { n: "Carla B.", c: "Mi lugar fijo para regalos. Siempre encuentro algo distinto y bien hecho." },
];
