import * as React from "react";

function SvgViewMorethick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={4}
      viewBox="0 0 20 4"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"view-more thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M2 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm8 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm8 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgViewMorethick;
