import * as React from "react";

function SvgCirclethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"circle thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M10 1.818c-4.511 0-8.182 3.67-8.182 8.182 0 4.511 3.67 8.182 8.182 8.182 4.511 0 8.182-3.67 8.182-8.182 0-4.512-3.67-8.182-8.182-8.182M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCirclethick;
