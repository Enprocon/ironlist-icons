import * as React from "react";

function SvgReportBlack24Dp({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"report_black_24dp"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" />
      <circle cx={12} cy={16} r={1} />
      <path d="M11 7h2v7h-2z" />
    </svg>
  );
}

export default SvgReportBlack24Dp;
