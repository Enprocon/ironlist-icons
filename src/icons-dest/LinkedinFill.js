import * as React from "react";

function SvgLinkedinFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <filter id="linkedin-fill_svg__a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.384314 0 0 0 0 0.396078 0 0 0 0 0.431373 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#linkedin-fill_svg__a)"
        transform="translate(-1256 -40)"
        fillRule="evenodd"
      >
        <path
          fillRule="nonzero"
          d="M1277.333 40h-18.666a2.666 2.666 0 00-2.667 2.667v18.666a2.666 2.666 0 002.667 2.667h18.666a2.666 2.666 0 002.667-2.667V42.667a2.666 2.666 0 00-2.667-2.667zM1264 58.667h-3.364v-9.334H1264v9.334zm-1.741-11.044c-1.028 0-1.715-.686-1.715-1.6 0-.915.685-1.6 1.828-1.6 1.028 0 1.715.685 1.715 1.6 0 .914-.686 1.6-1.828 1.6zM1276 58.667h-3.256v-5.102c0-1.41-.868-1.736-1.193-1.736-.326 0-1.411.218-1.411 1.736v5.102h-3.364v-9.334h3.364v1.303c.433-.76 1.301-1.303 2.93-1.303 1.627 0 2.93 1.303 2.93 4.232v5.102z"
        />
      </g>
    </svg>
  );
}

export default SvgLinkedinFill;
