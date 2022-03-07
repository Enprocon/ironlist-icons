import * as React from "react";

function SvgPausethick({ title, titleId, ...props }) {
  return (
    <svg
      width={10}
      height={20}
      viewBox="0 0 10 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"pause thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M1.667 0l1.11 1.111V18.89L1.668 20 .556 18.889V1.11L1.666 0zm6.666 0l1.111 1.111V18.89L8.334 20l-1.112-1.111V1.11L8.333 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPausethick;
