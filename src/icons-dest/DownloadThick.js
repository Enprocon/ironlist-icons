import * as React from "react";

function SvgDownloadthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"download thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M18.883 17.273L20 18.418l-1.118 1.127H1.118L0 18.4l1.12-1.126h17.763zM9.567 0l1.09 1.092.005 11.137 4.183-4.441 1.476.007-.006 1.377.049.1-6.797 7.092-6.84-7.137.094-.097.006-1.347 1.465.005 4.183 4.441.004-11.137L9.567 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgDownloadthick;
