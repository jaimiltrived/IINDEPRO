import React from 'react';

export function MotorSVG() {
  return (
    <svg className="product-svg" viewBox="0 0 680 680" fill="none">
      <defs>
        <radialGradient id="bG" cx="50%" cy="38%" r="55%"><stop offset="0%" stopColor="#6a7a6a" /><stop offset="40%" stopColor="#3a4a3a" /><stop offset="100%" stopColor="#1a221a" /></radialGradient>
        <radialGradient id="tG" cx="42%" cy="38%" r="52%"><stop offset="0%" stopColor="#8a9a8a" /><stop offset="50%" stopColor="#4a5a4a" /><stop offset="100%" stopColor="#1e2a1e" /></radialGradient>
        <radialGradient id="cG" cx="40%" cy="38%" r="55%"><stop offset="0%" stopColor="#4a5a4a" /><stop offset="100%" stopColor="#1a1a1a" /></radialGradient>
        <radialGradient id="gG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#2a5a2a" stopOpacity="0.5" /><stop offset="100%" stopColor="#0d1a0d" stopOpacity="0" /></radialGradient>
        <filter id="sh"><feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000" floodOpacity="0.8" /></filter>
      </defs>
      <ellipse cx="340" cy="340" rx="240" ry="240" fill="url(#gG)" />
      <g filter="url(#sh)">
        <rect x="125" y="290" width="430" height="120" fill="#1a221a" />
        <ellipse cx="340" cy="290" rx="215" ry="58" fill="url(#bG)" />
        <ellipse cx="340" cy="410" rx="215" ry="58" fill="#141c14" />
        <ellipse cx="340" cy="290" rx="215" ry="58" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <ellipse cx="340" cy="282" rx="215" ry="58" fill="url(#tG)" />
        <ellipse cx="340" cy="282" rx="215" ry="58" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <ellipse cx="340" cy="282" rx="185" ry="50" fill="url(#bG)" />
        <ellipse cx="340" cy="280" rx="155" ry="42" fill="#2a3a2a" />
        <ellipse cx="340" cy="278" rx="90" ry="24" fill="url(#cG)" />
        <ellipse cx="340" cy="278" rx="90" ry="24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <ellipse cx="340" cy="276" rx="60" ry="16" fill="#0f180f" />
        <ellipse cx="340" cy="276" rx="60" ry="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <ellipse cx="340" cy="275" rx="22" ry="6" fill="#1a2a1a" />
        <polygon points="340,268 346,274 340,280 334,274" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <circle cx="328" cy="275" r="2.5" fill="rgba(255,255,255,0.35)" />
        <circle cx="340" cy="275" r="2.5" fill="rgba(255,255,255,0.35)" />
        <circle cx="352" cy="275" r="2.5" fill="rgba(255,255,255,0.35)" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle - 90) * Math.PI / 180;
          return <circle key={i} cx={340 + 163 * Math.cos(rad)} cy={282 + 44 * Math.sin(rad)} r="4" fill="#0f180f" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />;
        })}
        <rect x="290" y="468" width="24" height="80" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="328" y="468" width="24" height="80" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="366" y="468" width="24" height="80" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </g>
      {Array.from({ length: 32 }).map((_, i) => {
        const a = (i / 32) * Math.PI * 2 - Math.PI / 2;
        const r1 = 268, r2 = i % 4 === 0 ? 252 : 260;
        return <line key={i} x1={340 + r1 * Math.cos(a)} y1={340 + r1 * Math.sin(a)} x2={340 + r2 * Math.cos(a)} y2={340 + r2 * Math.sin(a)} stroke="rgba(255,255,255,0.2)" strokeWidth={i % 4 === 0 ? 1.5 : 0.8} />;
      })}
      <circle cx="340" cy="340" r="270" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6 6" />
    </svg>
  );
}
