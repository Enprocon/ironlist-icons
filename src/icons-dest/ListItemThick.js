import * as React from "react";

function SvgListitemthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"list item thick"}</title>
      <path
        d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 3l1 1v3h3l1 1-1 1h-3v3l-1 1-1-1v-3H6l-1-1 1-1h3V6l1-1z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgListitemthick;
