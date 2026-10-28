import React from "react";

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

/**
 * Claude Starburst / Asterisk Icon
 */
export function ClaudeCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="30"
      height="30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 2.5v27M2.5 16h27M6.4 6.4l19.2 19.2M25.6 6.4L6.4 25.6M16 7l6 9-6 9-6-9 6-9z"
        stroke="#D97757"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.5" fill="#D97757" />
    </svg>
  );
}

/**
 * Claude Design Retro Mascot Icon
 * Pixel-styled boxy avatar with white border, eyes, and legs in terracotta (#D97757)
 */
export function ClaudeDesignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer border & body */}
      <rect x="2" y="5" width="32" height="24" rx="4" fill="#D97757" stroke="#ffffff" strokeWidth="1.6" />
      {/* Eyes */}
      <rect x="8" y="11" width="4" height="4" rx="1" fill="#18181b" />
      <rect x="24" y="11" width="4" height="4" rx="1" fill="#18181b" />
      {/* Mouth / Teeth gaps */}
      <rect x="12" y="23" width="4" height="6" fill="#18181b" stroke="#ffffff" strokeWidth="1.2" />
      <rect x="20" y="23" width="4" height="6" fill="#18181b" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Antigravity / Google AI Sparkle Icon
 */
export function AntigravityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="antigravityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      {/* Central 4-point sparkle with cosmic orbit */}
      <circle cx="18" cy="18" r="14" stroke="url(#antigravityGrad)" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.6" />
      <path
        d="M18 4C18 11.5 24.5 18 32 18C24.5 18 18 24.5 18 32C18 24.5 11.5 18 4 18C11.5 18 18 11.5 18 4Z"
        fill="url(#antigravityGrad)"
      />
      <circle cx="18" cy="18" r="2.5" fill="#ffffff" />
    </svg>
  );
}
