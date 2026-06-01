import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await readFile(
    join(process.cwd(), "assets/SpaceGrotesk-700.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e14",
          color: "#e3b176",
          fontFamily: "Space Grotesk",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        DF
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: font, weight: 700, style: "normal" },
      ],
    },
  );
}
