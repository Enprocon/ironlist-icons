import * as React from "react";

function SvgTickthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"tick thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M18.586.5l-1.271 1.296L6 13.336l-3.315-3.38-1.271-1.297H0v1.443l1.271 1.296L5.293 15.5h1.414L18.73 3.238 20 1.942V.5z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgTickthick;
