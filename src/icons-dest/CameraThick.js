import * as React from "react";

function SvgCamerathick(props) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"camera thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-497 -279)">
          <path
            d="M15.72 3l1 3H21l1 1v13l-1 1H3l-1-1V7l1-1h4.28l1-3h7.44zm-1.44 2H9.72l-1 3H4v11h16V8h-4.72l-1-3zM12 8c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"
            transform="translate(495 276)"
            id="Icons_basic_camera"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgCamerathick;
