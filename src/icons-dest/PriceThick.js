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
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-921 -686)">
          <path
            d="M16.768 2.455l.834.251 3.691 3.692.252.834-.922 4.614-.253.471-9.228 9.228H9.837l-7.382-7.382v-1.305l9.228-9.228.471-.253 4.614-.922zm-.122 1.906l-3.856.771-8.378 8.378 6.078 6.078 8.377-8.378.772-3.856-2.993-2.993zm-1.542 1.767a2.771 2.771 0 012.768 2.768 2.771 2.771 0 01-2.768 2.769 2.771 2.771 0 01-2.769-2.769 2.771 2.771 0 012.769-2.768zm0 1.845a.924.924 0 000 1.846.924.924 0 000-1.846z"
            transform="translate(919 684)"
            id="Icons_basic_price"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPricethick;
