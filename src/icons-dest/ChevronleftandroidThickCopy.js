import * as React from "react";

function SvgChevronleftandroidthickcopy({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"chevronleftandroid thick copy"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M17.946.297l-17 5-.069 1.896L8.311 9.98l.925 7.4 1.886.323 8-16L17.947.297zM10.22 9.132L9.58 8.32 4.382 6.37l11.924-3.507-5.495 10.99-.59-4.722z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronleftandroidthickcopy;
