import * as React from "react";

function SvgStarFilled({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.176 2.91L8.717 8.656H3.03l-.574 1.59 4.934 4.12-.61 2.134-1.026 3.596 1.36.995L12 17.828l1.521 1.016 3.364 2.247 1.36-.995L17.22 16.5l-.608-2.133 4.933-4.12-.573-1.59h-5.689l-2.459-5.748z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgStarFilled;
