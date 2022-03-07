import * as React from "react";

function SvgLocationpinthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"location pin thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M9 0c4.963 0 9 4.037 9 9 0 4.701-5.034 9.195-7.328 11H7.328C5.035 18.195 0 13.701 0 9c0-4.963 4.037-9 9-9zm0 2C5.14 2 2 5.14 2 9c0 3.75 4.614 7.981 6.995 9.764C10.749 17.434 16 13.108 16 9c0-3.86-3.14-7-7-7zm0 3c2.206 0 4 1.794 4 4 0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4 0-2.206 1.795-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLocationpinthick;
