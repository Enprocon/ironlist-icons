import * as React from "react";

function SvgCallthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"call thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-75 -278)">
          <path
            d="M18.388 19.978C10.62 19.635 4.365 13.38 4.022 5.612l3.515-1.406 2.149 4.299-1.664.832v.62a6.029 6.029 0 006.021 6.021h.62l.278-.554.555-1.11 4.298 2.15-1.406 3.514zm3.13-4.897l-6.022-3.011-1.347.45-.704 1.407a4.023 4.023 0 01-3.372-3.372l1.408-.704.449-1.346-3.01-6.022L7.65 2 2.63 4.007 2 4.94C2 14.347 9.654 22 19.061 22l.932-.63L22 16.35l-.483-1.27z"
            transform="translate(73 276)"
            id="Icons_basic_call"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgCallthick;
