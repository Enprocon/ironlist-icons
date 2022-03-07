import * as React from "react";

function SvgArrowdoubleBackthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"arrowdouble-back thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M19.474.589v2.046l-7.358 7.363 7.358 7.365v2.046h-2.052l-7.767-7.773-1.648-1.625L17.422.59h2.052zm-8.007 0v2.046L4.11 9.998l7.357 7.365v2.046H9.415l-7.767-7.773L0 10.01 9.415.59h2.052z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowdoubleBackthick;
