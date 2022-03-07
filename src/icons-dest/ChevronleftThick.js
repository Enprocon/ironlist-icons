import * as React from "react";

function SvgChevronleftthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"chevronleft thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M10.047 0L8.742 1.27.5 9.293v1.414l8.242 8.022L10.047 20H11.5v-1.414l-1.305-1.271L2.68 10l7.515-7.316 1.305-1.27V0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronleftthick;
