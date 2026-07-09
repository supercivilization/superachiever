import { ImageResponse } from "next/og"

export const alt = "Superachiever — create your success puzzle"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "88px",
              height: "4px",
              borderRadius: "2px",
              backgroundImage: "linear-gradient(90deg, #8b5cf6, #a855f7)",
            }}
          />
          <div
            style={{
              marginTop: "28px",
              fontSize: "24px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Superachiever · One member
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#f8fafc",
            }}
          >
            Create your success puzzle.
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              lineHeight: 1.3,
              color: "#94a3b8",
            }}
          >
            Your own single-family office, run async — for member benefits.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
