interface IconCloseProps {
  color?: string;
  size?: number;
  className?: string;
}

export function IconClose({
  color = "currentColor",
  size = 28,
  className,
}: IconCloseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="4"
        y1="4"
        x2="24"
        y2="24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="24"
        y1="4"
        x2="4"
        y2="24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
