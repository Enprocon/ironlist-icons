import * as React from "react";

function SvgOkhairedthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"ok haired thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M15.455 8.558V7.273h-1.286L9.091 12.35 6.74 10H5.455v1.286l2.993 2.993h1.286l5.72-5.72zM10 1.818c-4.511 0-8.182 3.67-8.182 8.182 0 4.511 3.67 8.182 8.182 8.182 4.511 0 8.182-3.67 8.182-8.182 0-4.511-3.67-8.182-8.182-8.182zM10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgOkhairedthick;
