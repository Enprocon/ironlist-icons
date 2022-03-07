import * as React from "react";

function SvgSizethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"size thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M12 0l-1 1 1 1.001h4.584L2 16.584v-4.575l-1-1.001-1 1V19L1 20h7l1-1-1-1.001H3.416L18 3.415V7.991l1 1.001 1-1.001V1L19 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSizethick;
