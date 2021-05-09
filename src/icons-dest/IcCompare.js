import * as React from "react";

function SvgIcCompare(props) {
  return (
    <svg
      width={18}
      height={22}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          id="ic_compare_svg__b"
        />
        <path id="ic_compare_svg__d" d="M0 0h50v50H0z" />
        <filter colorInterpolationFilters="auto" id="ic_compare_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.560784 0 0 0 0 0.568627 0 0 0 0 0.592157 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        transform="translate(-3 -1)"
        filter="url(#ic_compare_svg__a)"
        fill="none"
        fillRule="evenodd"
      >
        <mask id="ic_compare_svg__c" fill="#fff">
          <use xlinkHref="#ic_compare_svg__b" />
        </mask>
        <g mask="url(#ic_compare_svg__c)">
          <use
            fill="#000"
            xlinkHref="#ic_compare_svg__d"
            transform="translate(-13 -13)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgIcCompare;
