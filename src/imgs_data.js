// ─── IMAGE MAP ────────────────────────────────────────────────────────────────
// Each entry is an inline SVG data URI that renders a styled motor placeholder.
// Replace any value with a real image path e.g. '/images/hb_6206.png'

function motorSVG(label, kv, color = '#00c896') {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="280" viewBox="0 0 320 280">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0d1f2d"/>
      <stop offset="100%" stop-color="#060e18"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="320" height="280" fill="url(#bg)"/>
  <ellipse cx="160" cy="130" rx="90" ry="90" fill="url(#glow)"/>
  <!-- outer ring -->
  <circle cx="160" cy="130" r="72" fill="none" stroke="${color}" stroke-width="1.5" stroke-opacity="0.4"/>
  <circle cx="160" cy="130" r="58" fill="#141e2a" stroke="${color}" stroke-width="2.5" stroke-opacity="0.7"/>
  <!-- fins -->
  ${Array.from({length:12},(_,i)=>{
    const a=(i/12)*Math.PI*2;
    const x1=160+Math.cos(a)*44, y1=130+Math.sin(a)*44;
    const x2=160+Math.cos(a)*68, y2=130+Math.sin(a)*68;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="2" stroke-opacity="0.5"/>`;
  }).join('')}
  <!-- inner hub -->
  <circle cx="160" cy="130" r="28" fill="#1a2840" stroke="${color}" stroke-width="2"/>
  <circle cx="160" cy="130" r="12" fill="#0d1f2d" stroke="${color}" stroke-width="1.5" stroke-opacity="0.8"/>
  <!-- shaft -->
  <circle cx="160" cy="130" r="5" fill="${color}"/>
  <!-- label -->
  <text x="160" y="222" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="${color}">${label}</text>
  <text x="160" y="242" text-anchor="middle" font-family="monospace" font-size="12" fill="${color}" opacity="0.6">${kv}</text>
  <!-- scan lines -->
  ${Array.from({length:8},(_,i)=>`<line x1="0" y1="${20+i*30}" x2="320" y2="${20+i*30}" stroke="white" stroke-width="0.3" stroke-opacity="0.04"/>`).join('')}
</svg>`;
  return `data:image/svg+xml;base64,${btoa(svg.trim())}`;
}

export const IMGS = {
  logo: '/logo/logo.png',
  hb_2205: '/products/hb_2206.png',
  hb_2306: '/products/hb_2206.png',
  hb_6206: '/products/hb_6206.png',
  hb_8308: '/products/hb_6206.png',
  gw_4008: '/products/gw_4006.png',
  gw_5010: '/products/gw_4006.png',
  gw_6012: '/products/hb_6206.png',
  eb_6320: '/products/eb_4220.png',
  eb_8320: '/products/eb_8320.png',
  eb_9225: '/products/eb_8320.png',
  fa_3110: motorSVG('FA-3110', '900KV',  '#c084fc'),
  fa_5008: motorSVG('FA-5008', '340KV',  '#c084fc'),
  bird_series: '/IINDEPRO PAGE BIRD SERIES INTRODUCTION-01.jpg',
  exploded: '/products/exploded.png',
};