import * as React from "react";

function SvgMinusthick({ title, titleId, ...props }) {
  return (
    <svg
      width={16}
      height={2}
      viewBox="0 0 16 2"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"minus thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M13.35 5.067L4.006-4.277l-1.004-.002-.01 1.015 9.345 9.344.999-.025z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMinusthick;
