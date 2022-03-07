import * as React from "react";

function SvgChevronrightthick({ title, titleId, ...props }) {
  return (
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"chevronright thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M.5 0v1.414l1.271 1.27L9.086 10l-7.315 7.315L.5 18.585V20h1.414l1.27-1.271 7.316-7.315 1-1v-.827L7.558 5.644 3.185 1.27 1.914 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronrightthick;
