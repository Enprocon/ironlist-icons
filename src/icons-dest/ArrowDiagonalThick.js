import * as React from "react";

function SvgArrowDiagonalthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"arrow-diagonal thick"}</title>
      <path
        d="M.002 0L0 17.53l1.239 1.247 1.26-1.247V4.305L18.166 20H20v-1.828L4.389 2.537h13.087L18.74 1.28 17.476 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowDiagonalthick;
