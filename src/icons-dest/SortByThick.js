import * as React from "react";

function SvgSortBythick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"sort-by thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M6.707.293L12 5.586V7h-1.414L9.315 5.73v-.001L7 3.414V19l-1 1-1-1V3.414L2.685 5.729 1.414 7H0V5.586l1.271-1.272L5.293.293h1.414zM14 0l1 1v15.586l2.315-2.315L18.586 13H20v1.414l-1.27 1.271-4.023 4.022h-1.414L8 14.414V13h1.414l1.271 1.27v.001L13 16.586V1l1-1z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSortBythick;
