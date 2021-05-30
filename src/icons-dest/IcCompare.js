import * as React from "react";

function SvgIcCompare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <filter id="ic-compare_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.560784 0 0 0 0 0.568627 0 0 0 0 0.592157 0 0 0 1.000000 0"
          />
        </filter>
        <path
          id="ic-compare_svg__b"
          d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        />
      </defs>
      <g
        filter="url(#ic-compare_svg__a)"
        transform="translate(-806 -158)"
        fillRule="evenodd"
      >
        <g transform="translate(806 158)">
          <mask id="ic-compare_svg__c">
            <use xlinkHref="#ic-compare_svg__b" />
          </mask>
          <g mask="url(#ic-compare_svg__c)">
            <path d="M-13-13h50v50h-50z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgIcCompare;
