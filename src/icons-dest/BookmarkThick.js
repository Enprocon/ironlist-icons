import * as React from "react";

function SvgBookmarkthick(props) {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"bookmark thick"}</title>
      <defs>
        <path
          d="M18.667 4.5l.833.833v13.334l-.833.833h-.834l-5.416-5.417L7 19.5h-.833l-.834-.833V5.333l.834-.833h12.5zm-1.39 1.667H7.649L7 6.804V17l5.417-5 5.416 5V6.804l-.555-.637z"
          id="bookmark_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#bookmark_thick_svg__a"
        transform="translate(-5 -4)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarkthick;
