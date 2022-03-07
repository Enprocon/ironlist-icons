import * as React from "react";

function SvgEditthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"edit thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M17.273 0l-1.801 1.813 2.726 2.743L20 2.744v-.793L18.06 0h-.787zM2.545 2.173L0 4.734V17.44L2.545 20h12.624l2.545-2.561v-6.436l-1.102-.847-1.102.847v5.516l-1.255 1.263H3.459L2.203 16.52V5.655L3.459 4.39h5.397l.717-.998-.717-1.22H2.545zm2.704 9.928v2.743h2.726l9.397-9.457-2.727-2.743-9.396 9.457z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgEditthick;
