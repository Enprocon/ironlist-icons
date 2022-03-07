import * as React from "react";

function SvgAccountthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"account thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M9 10c4.963 0 9 4.038 9 9l-1 1H1l-1-1c0-4.962 4.037-9 9-9zm0 2c-3.52 0-6.442 2.613-6.929 6H15.93c-.487-3.387-3.409-6-6.93-6zM9 0c2.481 0 4.5 2.018 4.5 4.5C13.5 6.981 11.481 9 9 9a4.505 4.505 0 01-4.5-4.5C4.5 2.018 6.519 0 9 0zm0 2a2.503 2.503 0 00-2.5 2.5C6.5 5.878 7.621 7 9 7s2.5-1.122 2.5-2.5C11.5 3.121 10.379 2 9 2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAccountthick;
