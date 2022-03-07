import * as React from "react";

function SvgInstagramFill({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <filter id="instagram-fill_svg__a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.384314 0 0 0 0 0.396078 0 0 0 0 0.431373 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#instagram-fill_svg__a)"
        transform="translate(-1200 -40)"
        fillRule="evenodd"
      >
        <path
          fillRule="nonzero"
          d="M1206.667 40a6.667 6.667 0 00-6.667 6.667v10.666a6.667 6.667 0 006.667 6.667h10.666a6.667 6.667 0 006.667-6.667V46.667a6.667 6.667 0 00-6.667-6.667h-10.666zM1220 42.667a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm-8 2.666a6.668 6.668 0 016.667 6.667 6.668 6.668 0 01-6.667 6.667 6.668 6.668 0 01-6.667-6.667 6.668 6.668 0 016.667-6.667zm0 2.667c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        />
      </g>
    </svg>
  );
}

export default SvgInstagramFill;
