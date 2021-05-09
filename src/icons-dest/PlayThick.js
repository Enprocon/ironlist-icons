import * as React from "react";

function SvgPlaythick(props) {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"play thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-639 -686)">
          <path
            d="M5.587 2L4 2.855v18.29L5.587 22 20 12.855v-1.71L5.587 2zm.472 2.716L17.54 12 6.06 19.284V4.716z"
            transform="translate(635 684)"
            id="Icons_basic_play"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPlaythick;
