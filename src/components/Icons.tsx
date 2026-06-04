import React from "react";

type IProps = { size?: number; className?: string };

export const IconSearch: React.FC<IProps> = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconCart: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1.5" />
    <circle cx="18" cy="21" r="1.5" />
    <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.5L22 8H6" />
  </svg>
);

export const IconHistory: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconBolt: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const IconShield: React.FC<IProps> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" />
  </svg>
);

export const IconStar: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="m12 2 2.9 6.9L22 10l-5.4 4.8L18.2 22 12 18.3 5.8 22l1.6-7.2L2 10l7.1-1.1L12 2Z" />
  </svg>
);

export const IconClose: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconCheck: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5 9 17.5l11-11" />
  </svg>
);

export const IconChevron: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconClock: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconFire: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M12 2c1.5 4 5 5.5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4-.5 2 .5 3 1.5 3 0-3 .5-6 1.5-8Z" />
  </svg>
);

export const IconHeadset: React.FC<IProps> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5Z" />
  </svg>
);

export const IconRocket: React.FC<IProps> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19c-1 0-2 1-2 2 1 0 2-1 2-2Zm10-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M3 21c2-4 5-7 9-9l5-1 1-5c-5 1-9 4-12 8l-3 7Z" />
  </svg>
);

export const IconRefresh: React.FC<IProps> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
  </svg>
);

export const IconUser: React.FC<IProps> = ({ size = 14, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
  </svg>
);

export const IconGrid: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);

export const IconPlay: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M7 4v16l13-8L7 4Z" />
  </svg>
);

export const IconMusic: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const IconBrush: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3 21 10l-9 9-7-7 9-9Z" />
    <path d="M5 21c-1 0-2-1-2-2l3-3 2 2-3 3Z" />
  </svg>
);

export const IconChat: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
  </svg>
);

export const IconSpark: React.FC<IProps> = ({ size = 12, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M12 2 14 10l8 2-8 2-2 8-2-8-8-2 8-2 2-8Z" />
  </svg>
);

export const CategoryIcon: React.FC<{ name: string; size?: number }> = ({ name, size = 12 }) => {
  switch (name) {
    case "grid": return <IconGrid size={size} />;
    case "play": return <IconPlay size={size} />;
    case "music": return <IconMusic size={size} />;
    case "brush": return <IconBrush size={size} />;
    case "bolt": return <IconBolt size={size} />;
    case "chat": return <IconChat size={size} />;
    case "shield": return <IconShield size={size} />;
    case "spark": return <IconSpark size={size} />;
    default: return null;
  }
};
