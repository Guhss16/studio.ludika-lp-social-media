"use client";

import { useId } from "react";

type SiteIconProps = {
  size?: number;
  className?: string;
  circleColor?: string;
  iconColor?: string;
};

export default function SiteIcon({
  size = 39,
  className = "",
  circleColor = "#D9D9D9",
  iconColor = "#141414",
}: SiteIconProps) {
  const clipPathId = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* círculo de fundo */}
      <circle cx="19.5" cy="19.5" r="19.5" fill={circleColor} />

      {/* ícone interno novo (globo estilizado) */}
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M19.5 11C15.36 11 12 14.36 12 18.5C12 22.64 15.36 26 19.5 26C23.64 26 27 22.64 27 18.5C27 14.36 23.64 11 19.5 11ZM19.5 12.5C21.9 12.5 23.9 14.5 23.9 16.9C23.9 19.3 21.9 21.3 19.5 21.3C17.1 21.3 15.1 19.3 15.1 16.9C15.1 14.5 17.1 12.5 19.5 12.5ZM19.5 23C21.6 23 23.4 23.9 24.6 25.3C23.4 26.4 21.6 27.1 19.5 27.1C17.4 27.1 15.6 26.4 14.4 25.3C15.6 23.9 17.4 23 19.5 23Z"
          fill={iconColor}
        />
      </g>

      <defs>
        <clipPath id={clipPathId}>
          <rect width="39" height="39" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
