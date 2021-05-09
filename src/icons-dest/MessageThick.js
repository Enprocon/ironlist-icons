import * as React from "react";

function SvgMessagethick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"message thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-358 -582)">
          <path
            d="M11 4.01c-3.86 0-7 3.157-7 7.038v8.426l2.552-1.283.448-.106h6c3.86 0 7-3.157 7-7.037S16.86 4.01 13 4.01h-2zM3.447 22L2 21.1V11.049C2 6.058 6.037 2 11 2h2c4.962 0 9 4.059 9 9.048s-4.038 9.047-9 9.047H7.236L3.447 22z"
            transform="translate(356 580)"
            id="Icons_basic_message"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgMessagethick;
