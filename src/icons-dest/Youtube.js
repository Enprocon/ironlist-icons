import * as React from "react";

function SvgYoutube(props) {
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.53a8.47 8.47 0 100 16.94 8.47 8.47 0 100-16.94zM8.967 7.544L16.26 12l-7.292 4.457V7.544z"
          id="youtube_svg__a"
        />
      </defs>
      <use
        xlinkHref="#youtube_svg__a"
        transform="translate(-2 -2)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgYoutube;
