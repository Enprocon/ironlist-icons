import * as React from "react";

function SvgHomethick(props) {
  return (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.376 0L3.173 3.47 0 8.47.861 10h1.016v9l1.015 1h14.216l1.015-1v-9h1.016L20 8.47l-3.173-5L14.625 0h-9.25zM6.5 2H13.5l3.808 6H2.693l3.808-6zM3.907 18h12.186v-8H3.907v8z"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgHomethick;
