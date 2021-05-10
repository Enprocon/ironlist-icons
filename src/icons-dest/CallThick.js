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
      <path
        d="M16.388 17.978C8.62 17.635 2.365 11.38 2.022 3.612l3.515-1.406 2.149 4.299-1.664.832v.62a6.029 6.029 0 006.021 6.021h.62l.278-.554.555-1.11 4.298 2.15-1.406 3.514zm3.13-4.897l-6.022-3.011-1.347.45-.704 1.407a4.023 4.023 0 01-3.372-3.372l1.408-.704.449-1.346L6.92.483 5.65 0 .63 2.007 0 2.94C0 12.347 7.654 20 17.061 20l.932-.63L20 14.35l-.483-1.27z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallthick;
