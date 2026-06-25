import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Colecciones } from "@/components/Colecciones";
import { Productos } from "@/components/Productos";
import { Beneficios } from "@/components/Beneficios";
import { Nosotras } from "@/components/Nosotras";
import { Testimonios } from "@/components/Testimonios";
import { Visitanos } from "@/components/Visitanos";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Colecciones />
        <Productos />
        <Nosotras />
        <Testimonios />
        <Visitanos />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
