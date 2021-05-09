import * as React from "react";

function SvgSendthick(props) {
  return (
    <svg
      width={18}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M3.667 4.5l2.739 7.498-2.74 7.498 16.667-7.498L3.667 4.5zm3.008 3.236l8.521 3.834h-7.12l-1.4-3.834zm1.401 4.691h7.12l-8.52 3.834 1.4-3.834z"
          id="send_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#send_thick_svg__a"
        transform="translate(-3 -4)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSendthick;
