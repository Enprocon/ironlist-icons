import * as React from "react";

function SvgCalendar2({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.006 0v1h8.007V0h2.002v1h2.984L20 2v17l-1 1H1l-1-1V2l1-1h3.004V0h2.002zm11.992 5.005H2.002V18h15.996V5.005zm-7.957.032l.987.851-.002 4.06 4.305.001.819 1.012-.819 1.012h-4.305l.002 4.278-.987.825-1.018-.822-.001-4.282-4.06.001-.845-1.012.844-1.012 4.06-.001.002-4.064 1.018-.847zM4.004 3v1l1 1H2.003V3h2.002zm13.994 0v2h-2.984l1-1V3h1.984zm-3.985 0v1l1 1H5.006l1-1V3h8.008z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCalendar2;
