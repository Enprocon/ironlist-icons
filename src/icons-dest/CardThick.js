import * as React from "react";

function SvgCardthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={13}
      viewBox="0 0 20 13"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"card thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M21.077 6l.923.916v11.168l-.923.916H2.923L2 18.084V6.916L2.923 6h18.154zm-1.074 5.99H4.028v5.007h15.975V11.99zm-3.756 2.504h1.792l.818.755-.818.755h-3.021l-.818-.755.818-.755h1.229zm3.756-6.496H4.033v2.024l15.97-.055v-1.97z"
          id="card_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#card_thick_svg__a"
        transform="translate(-2 -6)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCardthick;
