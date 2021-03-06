import * as React from "react";

function SvgMillagethick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"millage thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M10 .5c5.514 0 10 4.487 10 10.002 0 2.181-.272 4.684-2.293 6.705L17 17.5H3l-.708-.294C.272 15.178 0 12.679 0 10.501.001 4.986 4.487.5 10 .5zm0 2c-4.41 0-8 3.59-8 8.001 0 2.341.42 3.827 1.435 4.999h13.131C17.58 14.332 18 12.847 18 10.502 18 6.09 14.411 2.5 10 2.5zm5 3v1.414l-1.27 1.271-1.026 1.025c.188.392.296.829.296 1.292 0 1.654-1.345 3-3 3-1.654 0-3-1.346-3-3 0-1.655 1.346-3 3-3 .462 0 .898.108 1.29.295l1.025-1.026 1.27-1.271H15zm-5 4.002a1.001 1.001 0 000 2 1.001 1.001 0 000-2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMillagethick;
