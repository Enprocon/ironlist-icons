import * as React from "react";

function SvgArrowMovethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"arrow-move thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M10.011 0L6.09 4.038l-.006 1.367L7.41 5.4 9.073 3.69V9H4.058L5.72 7.289l.005-1.368-1.329.006-3.92 4.037 3.92 4.038 1.368.006-.004-1.329-1.702-1.752h5.015v5.383l-1.662-1.711-1.366-.004.004 1.327L10.01 20l3.921-4.038.004-1.368-1.327.005-1.662 1.71v-5.382h4.994l-1.663 1.713.001.001-.004 1.367 1.328-.006 3.92-4.037v-.002l-3.92-4.036-1.368-.006.004 1.328L15.941 9h-4.994V3.69L12.609 5.4l1.367.004-.005-1.328z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowMovethick;
