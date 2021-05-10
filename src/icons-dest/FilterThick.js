import * as React from "react";

function SvgFilterthick(props) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"filter thick"}</title>
      <path
        d="M6 12c1.303 0 2.412.837 2.825 2H19l1 1-1 1H8.825A3.003 3.003 0 016 18a3.003 3.003 0 01-2.825-2H1l-1-1 1-1h2.175A3.003 3.003 0 016 12zm0 2a1.001 1.001 0 000 2 1.001 1.001 0 000-2zm8-8c1.303 0 2.412.837 2.825 2H19l1 1-1 1h-2.175A3.003 3.003 0 0114 12a3.003 3.003 0 01-2.825-2H1L0 9l1-1h10.175A3.003 3.003 0 0114 6zm0 2a1.001 1.001 0 000 2 1.001 1.001 0 000-2zM6 0c1.303 0 2.412.837 2.825 2H19l1 1-1 1H8.825A3.003 3.003 0 016 6a3.003 3.003 0 01-2.825-2H1L0 3l1-1h2.175A3.003 3.003 0 016 0zm0 2a1.001 1.001 0 000 2 1.001 1.001 0 000-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilterthick;
