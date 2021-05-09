import * as React from "react";

function SvgWeightthick(props) {
  return (
    <svg
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12 3.667a3.333 3.333 0 012.887 5h.446l.834.833 4.166 10-.833.833h-15l-.833-.833 4.166-10 .834-.833h.446a3.333 3.333 0 012.887-5zm2.643 6.666H9.357l-.112.112-3.426 8.222H18.18l-3.426-8.222-.111-.112zm-2.643-5a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334z"
          id="weight_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#weight_thick_svg__a"
        transform="translate(-3 -3)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgWeightthick;
