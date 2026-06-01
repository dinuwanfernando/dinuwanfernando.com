import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = site.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bold, medium] = await Promise.all([
    readFile(join(process.cwd(), "assets/SpaceGrotesk-700.woff")),
    readFile(join(process.cwd(), "assets/SpaceGrotesk-500.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e14",
          color: "#eceef2",
          padding: "76px 84px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Ambient gold glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(900px circle at 84% 6%, rgba(227,177,118,0.20), transparent 55%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 2,
            color: "#e3b176",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#e3b176" }} />
          DINUWANFERNANDO.COM
        </div>

        {/* Name and role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.04,
            }}
          >
            Dinuwan Fernando
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 500,
              color: "#e3b176",
              marginTop: 18,
            }}
          >
            Co-Founder &amp; CTO at Avagance
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.10)" }} />
          <div
            style={{
              display: "flex",
              fontSize: 27,
              fontWeight: 500,
              color: "#a9b1bc",
              maxWidth: 920,
              lineHeight: 1.3,
            }}
          >
            Building AI-native wealth management infrastructure for the UK
            financial advisory industry
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
