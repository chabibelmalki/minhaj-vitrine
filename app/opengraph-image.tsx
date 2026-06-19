import { ImageResponse } from "next/og";

export const alt = "MINHAJ — Conseil & solutions informatiques";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1020 0%, #1f47f5 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: -2 }}>
          MINHAJ
        </div>
        <div style={{ fontSize: 40, marginTop: 16, opacity: 0.9 }}>
          Conseil &amp; solutions informatiques
        </div>
        <div style={{ fontSize: 28, marginTop: 40, opacity: 0.7 }}>
          Conseil IT · Intelligence artificielle · Formation
        </div>
      </div>
    ),
    { ...size },
  );
}
