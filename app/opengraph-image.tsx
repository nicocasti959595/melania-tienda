import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          background: "linear-gradient(135deg, #fbf5f2 0%, #e8c8c1 60%, #f3e8e1 100%)",
          color: "#2a1820",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 28, border: "1.5px solid #2a1820", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 30, color: "#7a1c2e", fontStyle: "italic" }}>M</span>
          </div>
          <span style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#7a1c2e" }}>Melania</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#7a1c2e", margin: 0 }}>
            Villa Urquiza · CABA
          </p>
          <h1 style={{ fontSize: 92, lineHeight: 1, margin: "10px 0 0 0", letterSpacing: -2 }}>
            Boutique de mujer
          </h1>
          <p style={{ fontSize: 28, marginTop: 18, color: "#5a3a44", maxWidth: 850 }}>
            Indumentaria femenina seleccionada. Cortes que favorecen, telas que duran.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#5a3a44" }}>
          <span>melania-tienda.vercel.app</span>
          <span>@melania_villaurquiza</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
