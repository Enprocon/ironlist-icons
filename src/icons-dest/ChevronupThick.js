import * as React from "react";

function SvgChevronupthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"chevronup thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M.001 11.5h1.414l1.27-1.271 7.316-7.315 7.315 7.315 1.271 1.271h1.414v-1.414l-1.27-1.27L11.414 1.5l-1-1h-.827L5.646 4.442 1.271 8.816l-1.27 1.27z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronupthick;
