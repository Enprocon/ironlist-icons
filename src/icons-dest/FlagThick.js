import * as React from "react";

function SvgFlagthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"flag thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M1 .5l-1 1v17l1 1 1-1v-6h9.586l1 1h6.401l1.013-1V2.458L18.987 1.5h-7.573l-1-1H1zm1 2h7.586l1 1H18v8h-4.586l-1-1H2v-8z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgFlagthick;
