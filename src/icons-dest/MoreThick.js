import * as React from "react";

function SvgMorethick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"more thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 11a1 1 0 110 2 1 1 0 010-2zm0-8l1 1v5l-1 1-1-1V6l1-1z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMorethick;
