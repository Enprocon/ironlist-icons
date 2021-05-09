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
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-645 -1267)">
          <g id="Group" transform="translate(635 1264)">
            <mask id="mask-2">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Combined-Shape" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgActionthick;
