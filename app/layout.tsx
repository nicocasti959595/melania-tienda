import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { site } from "@/lib/site";
import { CartProvider } from "@/components/tienda/CartContext";
import { CartDrawer } from "@/components/tienda/CartDrawer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ropa de mujer Villa Urquiza",
    "boutique mujer CABA",
    "indumentaria femenina",
    "vestidos Villa Urquiza",
    "Melania ropa",
    "tienda de ropa Villa Urquiza",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    locale: "es_AR",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf5f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    telephone: `+${site.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.neighborhood,
      addressRegion: site.address.city,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    openingHours: ["Mo-Fr 10:00-20:00", "Sa 10:00-19:00"],
    sameAs: [site.instagram],
    priceRange: "$$",
  };

  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
