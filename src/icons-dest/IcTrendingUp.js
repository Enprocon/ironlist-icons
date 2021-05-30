import * as React from "react";

function SvgIcTrendingUp(props) {
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
        <filter id="ic-trending-up_svg__a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.560784 0 0 0 0 0.568627 0 0 0 0 0.592157 0 0 0 1.000000 0"
          />
        </filter>
        <path
          id="ic-trending-up_svg__b"
          d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
        />
      </defs>
      <g
        filter="url(#ic-trending-up_svg__a)"
        transform="translate(-16 -236)"
        fillRule="evenodd"
      >
        <g transform="translate(16 236)">
          <mask id="ic-trending-up_svg__c">
            <use xlinkHref="#ic-trending-up_svg__b" />
          </mask>
          <g mask="url(#ic-trending-up_svg__c)">
            <path d="M-13-13h50v50h-50z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgIcTrendingUp;
