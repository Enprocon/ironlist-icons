import * as React from "react";

function SvgPlaythick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"play thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M1.587 0L0 .855v18.29L1.587 20 16 10.855v-1.71L1.587 0zm.472 2.716L13.54 10 2.06 17.284V2.716z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlaythick;
