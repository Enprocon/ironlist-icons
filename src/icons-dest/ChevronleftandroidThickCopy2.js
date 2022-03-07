import * as React from "react";

function SvgChevronleftandroidthickcopy2({ title, titleId, ...props }) {
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
        <title id={titleId}>{"chevronleftandroid thick copy 2"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M1 0L0 1v18l1 1h18l1-1v-5l-1-1-1 1v4H2V2h16v4l1 1 1-1V1l-1-1H1zm8.586 5L5.293 9.293v1.414L9.586 15H11v-1.414L8.414 11H16l1-1-1-1H8.414L11 6.414V5H9.586z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronleftandroidthickcopy2;
