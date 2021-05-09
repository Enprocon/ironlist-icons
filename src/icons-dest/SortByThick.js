import * as React from "react";

function SvgSortBythick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"sort-by thick"}</title>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-356 -1266)">
          <path
            d="M8.707 2.293L14 7.586V9h-1.414l-1.271-1.27v-.001L9 5.414V21l-1 1-1-1V5.414L4.685 7.729 3.414 9H2V7.586l1.271-1.272 4.022-4.021h1.414zM16 2l1 1v15.586l2.315-2.315L20.586 15H22v1.414l-1.27 1.271-4.023 4.022h-1.414L10 16.414V15h1.414l1.271 1.27v.001L15 18.586V3l1-1z"
            transform="translate(354 1264)"
            id="Icons_navigation_sort-by"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgSortBythick;
