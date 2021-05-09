import * as React from "react";

function SvgHomethick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"home thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-778 -478)">
          <path
            d="M7.376 2L5.173 5.47 2 10.47 2.861 12h1.016v9l1.015 1h14.216l1.015-1v-9h1.016L22 10.47l-3.173-5L16.625 2h-9.25zM8.5 4H15.5l3.808 6H4.693l3.808-6zM5.907 20h12.186v-8H5.907v8z"
            transform="translate(776 476)"
            id="Icons_basic_home"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgHomethick;
