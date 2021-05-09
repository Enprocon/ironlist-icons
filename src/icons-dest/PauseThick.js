import * as React from "react";

function SvgPausethick(props) {
  return (
    <svg
      width={10}
      height={20}
      viewBox="0 0 10 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"pause thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-224 -686)">
          <path
            d="M8.667 2l1.11 1.111V20.89L8.668 22l-1.111-1.111V3.11L8.666 2zm6.666 0l1.111 1.111V20.89L15.334 22l-1.112-1.111V3.11L15.333 2z"
            transform="translate(217 684)"
            id="Icons_basic_pause"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPausethick;
