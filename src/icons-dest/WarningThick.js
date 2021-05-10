import * as React from "react";

function SvgWarningthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"warning thick"}</title>
      <path
        d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10zm0-2c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-11a1 1 0 110-2 1 1 0 010 2zm0 8l-1-1V9l1-1 1 1v5l-1 1z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgWarningthick;
