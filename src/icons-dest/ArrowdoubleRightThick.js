import * as React from "react";

function SvgArrowdoubleRightthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"arrowdouble-right thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M2.052.588l9.415 9.422-1.644 1.623-7.771 7.775H0v-2.045l7.359-7.365-7.36-7.364V.588h2.053zm8.006 0l9.416 9.422-1.645 1.623-7.77 7.775H8.007v-2.045l7.357-7.365-7.357-7.364V.588h2.05z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowdoubleRightthick;
