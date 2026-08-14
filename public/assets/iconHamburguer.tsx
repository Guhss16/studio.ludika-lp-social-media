interface IconHamburgerProps {
  color?: string;
  size?: number;
  className?: string;
}

export function IconHamburger({
  color = "#EB2782",
  size = 24,
  className,
}: IconHamburgerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="3" rx="1.5" fill={color} />
      <rect y="7.5" width="24" height="3" rx="1.5" fill={color} />
      <rect y="15" width="24" height="3" rx="1.5" fill={color} />
    </svg>
  );
}
