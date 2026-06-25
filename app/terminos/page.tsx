import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = { title: "Términos y condiciones" };

export default function Terminos() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <h1 className="font-serif text-4xl tracking-tightest mb-6">Términos y condiciones</h1>
        <p className="text-[color:var(--ink-soft)]">
          Esta web es una vidriera online de {site.name}, boutique ubicada en {site.address.street},{" "}
          {site.address.neighborhood}, {site.address.city}. Los precios y la disponibilidad de stock pueden variar; se
          confirman por WhatsApp antes de cerrar cualquier compra.
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Cambios y devoluciones</h2>
        <p className="text-[color:var(--ink-soft)]">
          Aceptamos cambios dentro de los 15 días corridos de la compra, sobre prendas en perfecto estado, con etiqueta
          y comprobante. No se aceptan cambios de prendas íntimas, accesorios de pelo ni de productos de promoción.
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Envíos</h2>
        <p className="text-[color:var(--ink-soft)]">
          Realizamos envíos a CABA y GBA en 24/48 hs hábiles, y a todo el país por Correo Argentino y Andreani. Los
          plazos pueden variar según el destino. Una vez despachado el pedido, te enviamos el número de seguimiento por
          WhatsApp.
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Medios de pago</h2>
        <p className="text-[color:var(--ink-soft)]">
          {site.payments.join(" · ")}. Las cuotas sin interés aplican según promociones bancarias vigentes.
        </p>
      </main>
      <Footer />
    </>
  );
}
