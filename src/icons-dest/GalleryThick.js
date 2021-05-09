import * as React from "react";

function SvgGallerythick(props) {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M13.903 6.907a1.37 1.37 0 112.738 0 1.37 1.37 0 01-2.738 0zM4 20v-5.54l4.83-3.105 3.433 4.622L20 9.98v10.02H4zM20 3.968V7.45l-7.349 5.695-3.33-4.484-5.32 3.421V3.968h16zM20.563 2H3.437L2 3.437v17.126L3.437 22h17.127L22 20.563V3.437L20.563 2z"
          id="gallery_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#gallery_thick_svg__a"
        transform="translate(-2 -2)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgGallerythick;
