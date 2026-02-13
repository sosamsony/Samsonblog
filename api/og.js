module.exports = (req, res) => {
  const titleRaw = (req.query?.title || "Tech Blog").toString();
  const tagRaw = (req.query?.tag || "Web Development").toString();

  const escapeXml = (input) =>
    input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const title = escapeXml(titleRaw);
  const tag = escapeXml(tagRaw);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="70" y="70" width="1060" height="490" rx="28"
        fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />

  <text x="110" y="170" fill="rgba(255,255,255,0.85)" font-size="34"
        font-family="Inter, Arial, sans-serif">${tag}</text>

  <foreignObject x="110" y="210" width="980" height="260">
    <div xmlns="http://www.w3.org/1999/xhtml"
         style="color:white;font-family:Inter,Arial,sans-serif;font-weight:800;font-size:64px;line-height:1.08;">
      ${title}
    </div>
  </foreignObject>

  <text x="110" y="525" fill="rgba(255,255,255,0.7)" font-size="26"
        font-family="Inter, Arial, sans-serif">blog.sosamson.com</text>
</svg>`;

  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.status(200).send(svg);
};
