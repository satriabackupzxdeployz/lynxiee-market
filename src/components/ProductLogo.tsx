import React from "react";

const wrap = (children: React.ReactNode, bg: string) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`g${Math.random()}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={bg} stopOpacity="1" />
        <stop offset="1" stopColor={bg} stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill={bg} />
    {children}
  </svg>
);

export const ProductLogo: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "netflix":
      return wrap(
        <g>
          <path d="M32 18h10l16 64H48L32 18Z" fill="#fff" />
          <path d="M58 18h10v64H58V18Z" fill="#fff" />
          <path d="M32 18h10v8H32z" fill="#b00610" />
          <path d="M58 74h10v8H58z" fill="#b00610" />
        </g>,
        "#000"
      );
    case "spotify":
      return wrap(
        <g fill="none" stroke="#000" strokeWidth="7" strokeLinecap="round">
          <path d="M22 38c20-10 38-10 56 4" />
          <path d="M26 54c16-8 32-8 46 4" />
          <path d="M30 68c12-6 26-6 36 4" />
        </g>,
        "#1db954"
      );
    case "canva":
      return wrap(
        <g>
          <circle cx="50" cy="50" r="28" fill="none" stroke="#fff" strokeWidth="8" />
          <path d="M58 52c-3 5-8 8-13 6s-7-9-4-17 11-13 16-11 5 8 2 14" stroke="#00c4cc" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>,
        "#7d2ae8"
      );
    case "openai":
      return wrap(
        <g fill="none" stroke="#fff" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
          <path d="M50 22 28 35v30l22 13 22-13V35L50 22Z" />
          <path d="M28 35l22 13 22-13M50 48v30" />
        </g>,
        "#10a37f"
      );
    case "youtube":
      return wrap(
        <g>
          <rect x="20" y="30" width="60" height="40" rx="10" fill="#fff" />
          <path d="M44 42v16l14-8-14-8Z" fill="#ff0000" />
        </g>,
        "#ff0000"
      );
    case "adobe":
      return wrap(
        <g>
          <path d="M30 22h40v56L50 36 30 78V22Z" fill="#fff" />
          <text x="50" y="68" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="22" fill="#fa0f00">A</text>
        </g>,
        "#fa0f00"
      );
    case "capcut":
      return wrap(
        <g>
          <circle cx="50" cy="50" r="26" fill="none" stroke="#fff" strokeWidth="6" />
          <text x="50" y="60" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="26" fill="#fff">C</text>
        </g>,
        "#000"
      );
    case "telegram":
      return wrap(
        <g>
          <path d="M22 50 78 28 68 76 50 62l-4 14-6-16-16-10Z" fill="#fff" />
          <path d="M40 60 68 36 46 64l-6 10v-14Z" fill="#b0d6ec" />
        </g>,
        "#29b6f6"
      );
    case "disney":
      return wrap(
        <g>
          <text x="50" y="62" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="36" fill="#fff" letterSpacing="-2">D+</text>
        </g>,
        "#0e2540"
      );
    case "nordvpn":
      return wrap(
        <g>
          <path d="M20 70 50 22l30 48-12-2-10-16-4 8-6-10-12 22-16-2Z" fill="#fff" />
        </g>,
        "#4687ff"
      );
    case "midjourney":
      return wrap(
        <g fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <path d="M22 70c8-22 22-30 28-30s20 8 28 30" />
          <path d="M28 64c8-18 16-22 22-22s14 4 22 22" />
          <path d="M34 60c6-12 12-14 16-14s10 2 16 14" />
        </g>,
        "#000"
      );
    case "notion":
      return wrap(
        <g>
          <rect x="24" y="22" width="52" height="56" rx="6" fill="#fff" />
          <path d="M36 34v32M36 34l28 32M64 34v32" stroke="#000" strokeWidth="5" fill="none" />
        </g>,
        "#000"
      );
    case "vidio":
      return wrap(
        <g>
          <path d="M22 28h56v44H22z" fill="#fff" />
          <path d="M42 40v20l18-10-18-10Z" fill="#fa541c" />
        </g>,
        "#fa541c"
      );
    case "applemusic":
      return wrap(
        <g>
          <path d="M36 24h28v34a14 14 0 1 1-10-13V34l-18 4v26a14 14 0 1 1-10-13V28l10-4Z" fill="#fff" />
        </g>,
        "#fc3c44"
      );
    case "grammarly":
      return wrap(
        <g>
          <circle cx="50" cy="50" r="28" fill="none" stroke="#fff" strokeWidth="7" />
          <circle cx="62" cy="50" r="5" fill="#fff" />
        </g>,
        "#15c39a"
      );
    default:
      return wrap(
        <text x="50" y="62" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="36" fill="#fff">?</text>,
        "#6366f1"
      );
  }
};
