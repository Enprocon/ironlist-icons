import * as React from "react";

function SvgCalendarthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"calendar thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-1339 -182)">
          <path
            d="M8.006 2v1h8.007V2h2.002v1h2.984L22 4v17l-1 1H3l-1-1V4l1-1h3.004V2h2.002zm11.992 8H4.002v10h15.996V10zM7.505 12A1.5 1.5 0 117.506 15a1.5 1.5 0 010-3.001zM6.004 5H4.002v3h15.996V5h-1.983v1l-1.001 1-1.001-1V5H8.006v1L7.005 7 6.004 6V5z"
            transform="translate(1337 180)"
            id="Icons_basic_calendar"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgCalendarthick;
