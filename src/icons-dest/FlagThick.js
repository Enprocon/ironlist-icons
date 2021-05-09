import * as React from "react";

function SvgFlagthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"flag thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-1057 -374)">
          <path
            d="M3 2.5l-1 1v17l1 1 1-1v-6h9.586l1 1h6.401l1.013-1V4.458L20.987 3.5h-7.573l-1-1H3zm1 2h7.586l1 1H20v8h-4.586l-1-1H4v-8z"
            transform="translate(1055 372)"
            id="Icons_basic_flag"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgFlagthick;
