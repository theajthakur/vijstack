import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

export async function renderOg(title: string, subtitle: string) {
  const logo = await readFile(join(process.cwd(), "public/logo-256.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0f1442", padding: 72, color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", background: "white", borderRadius: 18, padding: 10 }}>
            <img src={logoSrc} width={56} height={56} alt="" />
          </div>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>vijstack</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, maxWidth: 980 }}>{title}</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.7)", marginTop: 24, maxWidth: 900 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#4d94ea" }}>
          <span>vijstack.com</span>
          <span>20+ clients in 5+ countries</span>
        </div>
      </div>
    ),
    ogSize
  );
}
