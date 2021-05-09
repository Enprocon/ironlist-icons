import * as React from "react";

function SvgPlusthick(props) {
  return (
    <svg
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12.03 4.858l.82.707v5.618h5.93l.685.848-.686.848h-5.93v5.9l-.82.686-.85-.686v-5.9H5.565l-.707-.848.707-.847 5.615-.001V5.565l.85-.707z"
          id="plus_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#plus_thick_svg__a"
        transform="translate(-4 -4)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlusthick;