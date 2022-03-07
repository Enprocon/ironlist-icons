import * as React from "react";

function SvgFacebookFill({ title, titleId, ...props }) {
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
        <filter id="facebook-fill_svg__a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.384314 0 0 0 0 0.396078 0 0 0 0 0.431373 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#facebook-fill_svg__a)"
        transform="translate(-1312 -40)"
        fillRule="evenodd"
      >
        <path d="M1333.333 40h-18.666a2.666 2.666 0 00-2.667 2.667v18.666a2.666 2.666 0 002.667 2.667h10.161v-9.281h-3.124v-3.634h3.124v-2.673c0-3.099 1.895-4.788 4.66-4.788.932-.003 1.863.045 2.79.14v3.24h-1.905c-1.506 0-1.8.712-1.8 1.763v2.313h3.6l-.468 3.633h-3.153V64h4.781a2.666 2.666 0 002.667-2.667V42.667a2.666 2.666 0 00-2.667-2.667z" />
      </g>
    </svg>
  );
}

export default SvgFacebookFill;
