import * as React from "react";

function SvgArrowhistorythick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"arrow history thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M2.934.005l1.003 1.004v2.345c.255-.247.533-.464.82-.673l-.002-.001.008-.006c.174-.128.357-.239.54-.35.019-.014.04-.026.06-.038.206-.125.407-.26.622-.368.005.008.008.017.012.026a9.02 9.02 0 014.004-.935c5.01 0 9.088 4.056 9.088 9.04 0 4.985-4.077 9.042-9.088 9.042-5.012 0-9.088-4.055-9.09-9.038v-.003H.91l1.02-1.004 1.002 1.003c0 3.878 3.172 7.032 7.07 7.032 3.895 0 7.068-3.154 7.068-7.031s-3.173-7.032-7.068-7.032c-1.397 0-2.695.41-3.793 1.11-.422.274-.82.584-1.161.962l2.356.024v-.002l.002.002h.015v.016l.992.997-1.01.997-5.485-.052V1.01h-.003L2.934.005zm7.13 5.45l.955.966h-.002v3.97l2.62 2.78-.007 1.374-1.357-.003-3.182-3.381v-4.74l.973-.966z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowhistorythick;
