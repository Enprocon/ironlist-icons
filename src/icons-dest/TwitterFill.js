import * as React from "react";

function SvgTwitterFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <filter id="twitter-fill_svg__a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.384314 0 0 0 0 0.396078 0 0 0 0 0.431373 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#twitter-fill_svg__a)"
        transform="translate(-1144 -40)"
        fillRule="evenodd"
      >
        <path
          fillRule="nonzero"
          d="M1161.967 40h-11.953c-3.311 0-6.014 2.705-6.014 6.019V58c0 3.295 2.703 6 6.014 6h11.972c3.311 0 6.014-2.705 6.014-6.019V46.019c-.019-3.314-2.722-6.019-6.033-6.019zm-.02 8.99v.4c0 4-3.083 8.61-8.735 8.61a8.757 8.757 0 01-4.701-1.352c.247.019.476.038.723.038a6.12 6.12 0 003.806-1.296 3.066 3.066 0 01-2.873-2.095c.19.038.38.057.57.057.286 0 .571-.038.819-.114a3.044 3.044 0 01-2.417-2.971v-.038c.38.228.875.361 1.37.38a3.013 3.013 0 01-1.37-2.514c0-.552.152-1.066.418-1.524a8.79 8.79 0 006.32 3.162 2.759 2.759 0 01-.077-.685c0-1.677 1.37-3.029 3.064-3.029.876 0 1.675.362 2.246.952a5.706 5.706 0 001.942-.742 3.107 3.107 0 01-1.352 1.676 6.091 6.091 0 001.77-.476 6.225 6.225 0 01-1.522 1.561z"
        />
      </g>
    </svg>
  );
}

export default SvgTwitterFill;
