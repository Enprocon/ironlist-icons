import * as React from "react";

function SvgAfternoonthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"afternoon thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8.935 14.4l.818.824v2.448l-.818.824-.817-.824v-2.448l.817-.824zm4.421-1.6l1.923 1.937v1.166h-1.156L12.2 13.966V12.8h1.156zm-7.677 0v1.166l-1.923 1.937H2.6v-1.166L4.523 12.8h1.156zm3.265-7.07c2.024 0 3.67 1.664 3.67 3.71 0 2.046-1.646 3.71-3.67 3.71-2.023 0-3.67-1.664-3.67-3.71 0-2.046 1.647-3.71 3.67-3.71zm0 1.648c-1.121 0-2.034.925-2.034 2.062 0 1.137.913 2.063 2.035 2.063 1.121 0 2.034-.926 2.034-2.063s-.913-2.062-2.035-2.062zM4.098 8.8L5 9.6l-.902.8H1.101L.2 9.6l.901-.8h2.997zm13.277-.184v1.648h-4.353V8.616h4.353zM3.802 3.2L5.8 5.198V6.4H4.598L2.6 4.402V3.2h1.202zm11.598 0v1.202L13.402 6.4H12.2V5.198L14.198 3.2H15.4zM9 .68l.8.9V3.9L9 4.8l-.8-.901V1.58l.8-.9z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAfternoonthick;
