import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Tech Blog";
  const tag = searchParams.get("tag") ?? "Web Development";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "white",
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.75 }}>{tag}</div>
        <div style={{ marginTop: 18, lineHeight: 1.1 }}>{title}</div>
        <div style={{ marginTop: 28, fontSize: 22, opacity: 0.6 }}>
          yoursite.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
