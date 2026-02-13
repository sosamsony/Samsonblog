export const runtime = "edge";

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = escapeXml(searchParams.get("title") ?? "Tech Blog");
  const tag = escapeXml(searchParams.get("tag") ?? "Web Development");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="70" y="70" width="1060" height="490" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />

  <text x="110" y="170" fill="rgba(255,255,255,0.85)" font-size="34" font-family="Inter, Arial, sans-serif">
    ${tag}
  </text>

  <foreignObject x="110" y="210" width="980" height="260">
    <div xmlns="http://www.w3.org/1999/xhtml"
         style="color:white;font-family:Inter,Arial,sans-serif;font-weight:800;font-size:64px;line-height:1.08;">
      ${title}
    </div>
  </foreignObject>

  <text x="110" y="525" fill="rgba(255,255,255,0.7)" font-size="26" font-family="Inter, Arial, sans-serif">
    blog.sosamson.com
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
