import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f47f5",
          color: "white",
          fontSize: 22,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
