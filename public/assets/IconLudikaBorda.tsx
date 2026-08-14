import React from "react";

type IconLudikaBordaProps = {
  size?: number;
  className?: string;
  circleColor?: string;
  iconColor?: string;
};

const IconLudikaBorda: React.FC<IconLudikaBordaProps> = ({
  size = 54,
  className = "",
  circleColor = "#000000",
  iconColor = "#000000",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="27" cy="27" r="26" stroke={circleColor} strokeWidth="2" />
      <rect
        x="2"
        y="2"
        width="50"
        height="50"
        rx="25"
        fill="url(#pattern0_115_6)"
      />
      <defs>
        <pattern
          id="pattern0_115_6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_115_6"
            transform="translate(-1.69333 -0.733333) scale(0.00114206)"
          />
        </pattern>
        <image
          id="image0_115_6"
          width="3841"
          height="2161"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0K..."
        />
      </defs>
    </svg>
  );
};

export default IconLudikaBorda;
