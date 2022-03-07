import * as React from "react";

function SvgStackthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"stack thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M19 11l1 1v7l-1 1H1l-1-1v-7l1-1h18zm-1 2H2v5h16v-5zm1-13l1 1v7l-1 1H1L0 8V1l1-1h18zm-1 2H2v5h16V2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgStackthick;
