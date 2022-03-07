import * as React from "react";

function SvgLikethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"like thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M17.472 8.515L10 17.655l-7.45-9.11a3.6 3.6 0 01-.732-2.181 3.64 3.64 0 013.637-3.637A3.64 3.64 0 018.97 5.455h2.058a3.64 3.64 0 013.516-2.728 3.64 3.64 0 013.637 3.637 3.58 3.58 0 01-.71 2.151M14.545.91C12.65.91 10.978 1.88 10 3.351A5.453 5.453 0 005.455.91 5.46 5.46 0 000 6.364C0 7.55.38 8.683 1.12 9.666l7.706 9.425h2.348l7.728-9.454A5.403 5.403 0 0020 6.364 5.46 5.46 0 0014.545.909"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLikethick;
