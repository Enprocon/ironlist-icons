import * as React from "react";

function SvgFunnelthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"funnel thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M9.675 8.429L3.468 2.222H15.88L9.674 8.43zm8.888-8.43H.786L0 1.898l8.563 8.563v7.318L10.167 20l.619-.257V10.46l8.563-8.563L18.563 0z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgFunnelthick;
