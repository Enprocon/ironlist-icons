import * as React from "react";

function SvgTickthick(props) {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"tick thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-360 -896)">
          <path
            d="M20.586 4.5l-1.271 1.296L8 17.336l-3.315-3.38-1.271-1.297H2v1.443l1.271 1.296L7.293 19.5h1.414L20.73 7.238 22 5.942V4.5z"
            transform="translate(358 892)"
            id="Icons_basic_tick"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgTickthick;
