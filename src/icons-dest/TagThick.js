import * as React from "react";

function SvgTagthick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"tag thick"}</title>
      <path
        d="M10.962 0L20 9.038v4.03L13.068 20h-4.03L0 10.962v-8.24L2.722 0h8.24zm-.872 2.105H3.594l-1.49 1.489v6.497l7.806 7.804h2.286l5.699-5.7V9.91L10.09 2.105zm-3.816.938A3.161 3.161 0 019.432 6.2a3.161 3.161 0 01-3.158 3.158A3.161 3.161 0 013.116 6.2a3.161 3.161 0 013.158-3.158zm0 2.105a1.054 1.054 0 000 2.105 1.054 1.054 0 000-2.105z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgTagthick;
