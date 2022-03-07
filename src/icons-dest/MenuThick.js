import * as React from "react";

function SvgMenuthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={12}
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"menu thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M19 10l1 1-1 1H1l-1-1 1-1h18zm0-5l1 1-1 1H1L0 6l1-1h18zm0-5l1 1-1 1H1L0 1l1-1h18z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMenuthick;
