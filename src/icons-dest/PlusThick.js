import * as React from "react";

function SvgPlusthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"plus thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M12.03 4.858l.82.707v5.618h5.93l.685.848-.686.848h-5.93v5.9l-.82.686-.85-.686v-5.9H5.565l-.707-.848.707-.847 5.615-.001V5.565l.85-.707z"
          id="plus_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#plus_thick_svg__a"
        transform="translate(-4 -4)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlusthick;
