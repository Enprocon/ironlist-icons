import * as React from "react";

function SvgPricethick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"price thick"}</title>
      <path
        d="M14.768.455l.834.251 3.691 3.692.252.834-.922 4.614-.253.471-9.228 9.228H7.837L.455 12.163v-1.305L9.683 1.63l.471-.253 4.614-.922zm-.122 1.906l-3.856.771-8.378 8.378 6.078 6.078 8.377-8.378.772-3.856-2.993-2.993zm-1.542 1.767a2.771 2.771 0 012.768 2.768 2.771 2.771 0 01-2.768 2.769 2.771 2.771 0 01-2.769-2.769 2.771 2.771 0 012.769-2.768zm0 1.845a.924.924 0 000 1.846.924.924 0 000-1.846z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPricethick;
