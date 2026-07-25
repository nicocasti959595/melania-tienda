export const site = {
  name: "Melania",
  tagline: "Boutique de mujer · Villa Urquiza",
  description:
    "Indumentaria femenina seleccionada con detalle. Vestidos, blusas, pantalones, sweaters y accesorios para todos los días, en pleno corazón de Villa Urquiza.",
  url: "https://melania.sumapyme.com.ar",
  // Datos de contacto de DEMO — reemplazar por reales del local
  whatsapp: "5491112345678",
  whatsappPretty: "+54 9 11 1234-5678",
  email: "hola@melania.com.ar",
  instagram: "https://www.instagram.com/melania_villaurquiza/",
  instagramHandle: "@melania_villaurquiza",
  address: {
    street: "Av. Triunvirato 4500",
    neighborhood: "Villa Urquiza",
    city: "CABA",
    province: "Buenos Aires",
    country: "AR",
    zip: "C1431",
  },
  hours: [
    { d: "Lunes a Viernes", h: "10:00 – 20:00" },
    { d: "Sábados", h: "10:00 – 19:00" },
    { d: "Domingos", h: "Cerrado" },
  ],
  shipping: {
    cabaGba: "Envíos a CABA y GBA en 24 / 48 hs",
    nacional: "Envíos a todo el país por Correo Argentino y Andreani",
  },
  payments: ["Mercado Pago", "Transferencia", "Crédito · 3 cuotas sin interés", "Débito", "Efectivo"],
};

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
