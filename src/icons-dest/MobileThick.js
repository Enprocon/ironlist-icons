import * as React from "react";

function SvgMobilethick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"mobile thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M12.43 0L14 1.59v16.435L12.51 20H1.465L0 18V1.585L1.585 0H12.43zm-.835 2H2.41L2 2.415V17.36l.47.64h9.045l.5-.645V2.41l-.42-.41zM7 14a1 1 0 110 2 1 1 0 010-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMobilethick;
