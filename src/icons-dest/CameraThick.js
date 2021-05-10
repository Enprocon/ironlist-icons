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
      <path
        d="M13.72 0l1 3H19l1 1v13l-1 1H1l-1-1V4l1-1h4.28l1-3h7.44zm-1.44 2H7.72l-1 3H2v11h16V5h-4.72l-1-3zM10 5c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCamerathick;
