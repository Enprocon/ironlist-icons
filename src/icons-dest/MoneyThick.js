import * as React from "react";

function SvgMoneythick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"money thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8.225 6.924a1.775 1.775 0 113.55.002 1.775 1.775 0 01-3.55-.002zm7.886-4.471c-.04.148-.068.3-.068.46a1.775 1.775 0 002.129 1.74v5.04a1.774 1.774 0 00-2.13 1.74c0 .047.012.093.015.14H4.07c.004-.047.014-.093.014-.141 0-.981-.795-1.775-1.774-1.775-.175 0-.338.033-.497.08V4.608c.159.046.322.08.497.08.98 0 1.774-.795 1.774-1.776 0-.16-.029-.312-.069-.46h12.097zM18.685.636H.987L0 1.743v10.695l.987.925h17.698L20 12.438V1.743L18.685.636z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMoneythick;
