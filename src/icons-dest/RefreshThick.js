import * as React from "react";

function SvgRefreshthick({ title, titleId, ...props }) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"refresh thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M16.708 7.292A6.632 6.632 0 0012 5.333 6.658 6.658 0 005.342 12 6.658 6.658 0 0012 18.667c3.108 0 5.7-2.125 6.442-5l-.609-.834-1.125.834A4.992 4.992 0 0112 17c-2.758 0-5-2.242-5-5s2.242-5 5-5a4.93 4.93 0 013.517 1.483L14.5 9.5l4.167.833-.834-4.166"
          id="refresh_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#refresh_thick_svg__a"
        transform="translate(-5 -5)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgRefreshthick;
