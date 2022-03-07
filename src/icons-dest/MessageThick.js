import * as React from "react";

function SvgMessagethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"message thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M9 2.01c-3.86 0-7 3.157-7 7.038v8.426l2.552-1.283.448-.106h6c3.86 0 7-3.157 7-7.037S14.86 2.01 11 2.01H9zM1.447 20L0 19.1V9.049C0 4.058 4.037 0 9 0h2c4.962 0 9 4.059 9 9.048s-4.038 9.047-9 9.047H5.236L1.447 20z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMessagethick;
