import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = { title: "Política de privacidad" };

export default function Privacidad() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 lg:px-8 py-16 prose prose-stone">
        <h1 className="font-serif text-4xl tracking-tightest mb-6">Política de privacidad</h1>
        <p className="text-[color:var(--ink-soft)]">
          En {site.name} cuidamos los datos personales de quienes nos visitan, en nuestro local de Villa Urquiza y en
          esta web. Recolectamos únicamente los datos que vos nos das voluntariamente al consultar por WhatsApp,
          coordinar una compra o pedir un envío (nombre, teléfono y dirección).
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Uso de los datos</h2>
        <p className="text-[color:var(--ink-soft)]">
          Usamos tus datos sólo para responder tu consulta, organizar el envío del pedido y enviarte novedades si nos
          lo autorizás. Nunca los vendemos ni los compartimos con terceros, salvo las empresas de envío necesarias para
          entregarte la prenda (Correo Argentino, Andreani, cadetería local).
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Tus derechos</h2>
        <p className="text-[color:var(--ink-soft)]">
          Podés pedirnos en cualquier momento que actualicemos o eliminemos tus datos escribiéndonos a{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>
        <h2 className="font-serif text-2xl mt-8 mb-3">Cookies</h2>
        <p className="text-[color:var(--ink-soft)]">
          La web usa cookies técnicas necesarias para su funcionamiento. No usamos cookies de publicidad ni tracking
          de terceros.
        </p>
      </main>
      <Footer />
    </>
  );
}
