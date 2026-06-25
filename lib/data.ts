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

export type Producto = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  precio: number;
  precioAnterior?: number;
  img: string;
  badge?: string;
  detalle: string;
};

export const productos: Producto[] = [
  {
    slug: "vestido-mila",
    nombre: "Vestido Mila",
    categoria: "Vestidos",
    precio: 78900,
    precioAnterior: 92000,
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    badge: "Top semana",
    detalle: "Vestido midi de viscosa, cuello en V, manga ¾.",
  },
  {
    slug: "blusa-clara",
    nombre: "Blusa Clara",
    categoria: "Blusas",
    precio: 42500,
    img: "https://images.unsplash.com/photo-1551163943-3f7253a97c64?auto=format&fit=crop&w=900&q=80",
    detalle: "Blusa de seda lavada, escote redondo y mangas francesas.",
  },
  {
    slug: "pantalon-alma",
    nombre: "Pantalón Alma",
    categoria: "Pantalones",
    precio: 56900,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    detalle: "Pantalón sastrero de tiro alto, pinzas y caída perfecta.",
  },
  {
    slug: "sweater-aurora",
    nombre: "Sweater Aurora",
    categoria: "Sweaters",
    precio: 64900,
    badge: "Nuevo",
    img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=900&q=80",
    detalle: "Lana fría 100%, escote bote, calce relajado.",
  },
  {
    slug: "campera-rio",
    nombre: "Trench Río",
    categoria: "Abrigos",
    precio: 132000,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    detalle: "Trench impermeable largo, cinto al tono, forrado.",
  },
  {
    slug: "vestido-frida",
    nombre: "Vestido Frida",
    categoria: "Vestidos",
    precio: 89500,
    img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80",
    badge: "Edición",
    detalle: "Vestido satinado bordó, espalda al aire, breteles regulables.",
  },
  {
    slug: "jean-luz",
    nombre: "Jean Luz",
    categoria: "Pantalones",
    precio: 52900,
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=80",
    detalle: "Jean wide leg de tiro alto, denim rígido azul medio.",
  },
  {
    slug: "blusa-sol",
    nombre: "Camisa Sol",
    categoria: "Blusas",
    precio: 46500,
    img: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80",
    detalle: "Camisa de lino oversize, ideal para layering.",
  },
  {
    slug: "tapado-noa",
    nombre: "Tapado Noa",
    categoria: "Abrigos",
    precio: 168000,
    precioAnterior: 195000,
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    badge: "Promo",
    detalle: "Tapado largo en paño doble faz, color camel.",
  },
  {
    slug: "cartera-elena",
    nombre: "Cartera Elena",
    categoria: "Accesorios",
    precio: 58900,
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
    detalle: "Bandolera de cuero, cierre dorado, interior con bolsillo.",
  },
  {
    slug: "sweater-margot",
    nombre: "Sweater Margot",
    categoria: "Sweaters",
    precio: 71900,
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
    detalle: "Lana merino canalé, cuello alto, tonos crema.",
  },
  {
    slug: "panuelo-amelie",
    nombre: "Pañuelo Amélie",
    categoria: "Accesorios",
    precio: 21900,
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=80",
    detalle: "Pañuelo estampado, 90x90 cm, terminación a mano.",
  },
];

export const categorias: Categoria[] = ["Vestidos", "Blusas", "Pantalones", "Sweaters", "Abrigos", "Accesorios"];

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
