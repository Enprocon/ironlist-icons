import * as React from "react";

function SvgActionthick(props) {
  return (
    <svg
      width={4}
      height={18}
      viewBox="0 0 4 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"action thick"}</title>
      <defs>
        <path
          d="M12 17c.917 0 1.667.75 1.667 1.667 0 .916-.75 1.666-1.667 1.666s-1.667-.75-1.667-1.666c0-.917.75-1.667 1.667-1.667zm0-6.667c.917 0 1.667.75 1.667 1.667s-.75 1.667-1.667 1.667-1.667-.75-1.667-1.667.75-1.667 1.667-1.667zm0-6.666c.917 0 1.667.75 1.667 1.666C13.667 6.25 12.917 7 12 7s-1.667-.75-1.667-1.667c0-.916.75-1.666 1.667-1.666z"
          id="action_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#action_thick_svg__a"
        transform="translate(-10 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgActionthick;
