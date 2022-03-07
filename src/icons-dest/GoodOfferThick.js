import * as React from "react";

function SvgGoodofferthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"good offer thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M7.223 0l-1.59.95v4.18L4.199 8.735H1.077L0 9.816v9.104L1.077 20h13.846l1.001-.682L20 9.015l-1.001-1.477h-7.794V2.806l-.564-.95L7.223 0zM5.917 10.223L7.71 5.737l.077-.4V2.762l1.265.687v5.169l1.076 1.08h7.285l-3.221 8.143H5.917v-7.618zM2.153 17.84h1.61v-6.946h-1.61v6.946z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgGoodofferthick;
