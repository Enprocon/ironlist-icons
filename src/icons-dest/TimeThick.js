import * as React from "react";

function SvgTimethick(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"time thick"}</title>
      <defs>
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2.207c-4.289 0-7.778 3.496-7.778 7.793 0 4.297 3.49 7.793 7.778 7.793 4.289 0 7.778-3.496 7.778-7.793 0-4.297-3.49-7.793-7.778-7.793zm-.502 3.525l1.11 1.096v3.149l.522-.518.498-.495 1.565.006.006 1.555-3.241 3.219-.458-.002-.002.002-.001-.002-1.104-.004-.004-1.088-.002-.001V8.828l1.11-1.096z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-499 -894)">
          <g id="Group" transform="translate(497 892)">
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

export default SvgTimethick;
