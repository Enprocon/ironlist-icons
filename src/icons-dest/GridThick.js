import * as React from "react";

function SvgGridthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"grid thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8 11l1 1v7l-1 1H1l-1-1v-7l1-1h7zm7.5 0c2.481 0 4.5 2.018 4.5 4.5S17.981 20 15.5 20a4.505 4.505 0 01-4.5-4.5c0-2.482 2.019-4.5 4.5-4.5zM7 13H2v5h5v-5zm8.5 0a2.503 2.503 0 00-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8 0l1 1v7L8 9H1L0 8V1l1-1h7zm11 0l1 1v7l-1 1h-7l-1-1V1l1-1h7zM7 2H2v5h5V2zm11 0h-5v5h5V2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgGridthick;
