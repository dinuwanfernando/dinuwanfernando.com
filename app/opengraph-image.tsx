import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = site.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bold, medium, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/SpaceGrotesk-700.woff")),
    readFile(join(process.cwd(), "assets/SpaceGrotesk-500.woff")),
    readFile(join(process.cwd(), "assets/og-headshot.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0a0e14",
          color: "#eceef2",
          padding: "64px 76px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Ambient gold glow behind the portrait */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(680px circle at 82% 42%, rgba(227,177,118,0.22), transparent 55%)",
          }}
        />

        {/* Left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingRight: 52,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 23,
              fontWeight: 500,
              letterSpacing: 2,
              color: "#e3b176",
            }}
          >
            <div style={{ width: 40, height: 2, background: "#e3b176" }} />
            DINUWANFERNANDO.COM
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              marginTop: 26,
            }}
          >
            Dinuwan Fernando
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 35,
              fontWeight: 500,
              color: "#e3b176",
              marginTop: 14,
            }}
          >
            Co-Founder &amp; CTO at Avagance
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 500,
              color: "#a9b1bc",
              marginTop: 24,
              maxWidth: 560,
              lineHeight: 1.35,
            }}
          >
            Building AI-native wealth management infrastructure for the UK
            financial advisory industry
          </div>
        </div>

        {/* Right: headshot */}
        <div style={{ display: "flex", flexShrink: 0 }}>
          <img
            alt=""
            src={photoSrc}
            width={426}
            height={356}
            style={{
              borderRadius: 22,
              border: "1px solid rgba(227,177,118,0.4)",
              boxShadow: "0 30px 60px -22px rgba(0,0,0,0.65)",
            }}
          />
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
