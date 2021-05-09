import * as React from "react";

function SvgReportBlack24Dp(props) {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter colorInterpolationFilters="auto" id="report_black_24dp_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.560784 0 0 0 0 0.568627 0 0 0 0 0.592157 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        transform="translate(-208 -320)"
        filter="url(#report_black_24dp_svg__a)"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(208 320)">
          <path d="M0 0h24v24H0z" />
          <path
            d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
            fill="#000"
            fillRule="nonzero"
          />
          <circle fill="#000" fillRule="nonzero" cx={12} cy={16} r={1} />
          <path fill="#000" fillRule="nonzero" d="M11 7h2v7h-2z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgReportBlack24Dp;
