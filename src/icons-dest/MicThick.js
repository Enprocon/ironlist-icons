import * as React from "react";

function SvgMicthick({ title, titleId, ...props }) {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"mic thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M15 6.986l1 1V9c-.009 4.071-3.074 7.433-7.018 7.919V18H12v2H4v-2h2.982v-1.087C3.055 16.412.008 13.06 0 9V7.986l1-1 1 1v1c0 3.308 2.691 6 6 6s6-2.692 6-6v-1l1-1zM8 0c2.757 0 5 2.243 5 5v4c0 2.757-2.243 5-5 5s-5-2.243-5-5V5c0-2.757 2.243-5 5-5zm0 2C6.345 2 5 3.346 5 5v4c0 1.655 1.345 3 3 3s3-1.345 3-3V5c0-1.654-1.345-3-3-3z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMicthick;
