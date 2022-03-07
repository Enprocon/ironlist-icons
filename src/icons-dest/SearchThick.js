import * as React from "react";

function SvgSearchthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"search thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8.5 15A6.508 6.508 0 012 8.5C2 4.916 4.916 2 8.5 2S15 4.916 15 8.5 12.084 15 8.5 15zm10.229 2.315l-3.56-3.56A8.452 8.452 0 0017 8.5C17 3.813 13.187 0 8.5 0 3.813 0 0 3.813 0 8.5 0 13.187 3.813 17 8.5 17a8.451 8.451 0 005.254-1.831l4.197 4.195.634.636H20v-1.414l-1.271-1.271z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSearchthick;
