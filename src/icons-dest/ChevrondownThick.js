import * as React from "react";

function SvgChevrondownthick(props) {
  return (
    <svg
      width={20}
      height={12}
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"chevrondown thick"}</title>
      <path
        d="M.001.5h1.414l1.27 1.271 7.316 7.315 7.315-7.315L18.587.5h1.414v1.414l-1.27 1.27-7.316 7.316-1 1h-.827L5.646 7.558 1.271 3.185l-1.27-1.27z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevrondownthick;
