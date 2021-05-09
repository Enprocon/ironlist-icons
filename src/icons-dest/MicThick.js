import * as React from "react";

function SvgMicthick(props) {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"mic thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-80 -998)">
          <path
            d="M19 8.986l1 1V11c-.009 4.071-3.074 7.433-7.018 7.919V20H16v2H8v-2h2.982v-1.087C7.055 18.412 4.008 15.06 4 11V9.986l1-1 1 1v1c0 3.308 2.691 6 6 6s6-2.692 6-6v-1l1-1zM12 2c2.757 0 5 2.243 5 5v4c0 2.757-2.243 5-5 5s-5-2.243-5-5V7c0-2.757 2.243-5 5-5zm0 2c-1.655 0-3 1.346-3 3v4c0 1.655 1.345 3 3 3s3-1.345 3-3V7c0-1.654-1.345-3-3-3z"
            transform="translate(76 996)"
            id="Icons_basic_voice"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgMicthick;
