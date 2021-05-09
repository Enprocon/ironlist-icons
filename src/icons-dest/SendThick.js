import * as React from "react";

function SvgSendthick(props) {
  return (
    <svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"send thick"}</title>
      <defs>
        <path
          d="M3.667 4.5l2.739 7.498-2.74 7.498 16.667-7.498L3.667 4.5zm3.008 3.236l8.521 3.834h-7.12l-1.4-3.834zm1.401 4.691h7.12l-8.52 3.834 1.4-3.834z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-918 -792)">
          <g id="Group" transform="translate(915 788)">
            <mask id="mask-2">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Combined-Shape" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgSendthick;
