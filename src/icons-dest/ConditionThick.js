import * as React from "react";

function SvgConditionthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"condition thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M9.176.91L6.717 6.656H1.03l-.574 1.59 4.934 4.12L4.78 14.5l-1.026 3.596 1.36.995L10 15.828l1.521 1.016 3.364 2.247 1.36-.995L15.22 14.5l-.608-2.133 4.933-4.12-.573-1.59h-5.689L10.824.909H9.176zM10 3.544l.906 2.118.784 1.833.177.414.233.545H16.493l-1.235 1.032-2.693 2.247.16.564 1.125 3.94L10.497 14 10 13.667 9.503 14l-1.476.986-.767.513-1.11.74 1.124-3.94.16-.564-2.69-2.247-1.237-1.032H7.9l.234-.545.176-.414.785-1.833L10 3.545z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgConditionthick;
