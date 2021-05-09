import * as React from "react";

function SvgCardthick(props) {
  return (
    <svg
      width={20}
      height={13}
      viewBox="0 0 20 13"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"card thick"}</title>
      <defs>
        <path
          d="M21.077 6l.923.916v11.168l-.923.916H2.923L2 18.084V6.916L2.923 6h18.154zm-1.074 5.99H4.028v5.007h15.975V11.99zm-3.756 2.504h1.792l.818.755-.818.755h-3.021l-.818-.755.818-.755h1.229zm3.756-6.496H4.033v2.024l15.97-.055v-1.97z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-779 -282)">
          <g id="Group" transform="translate(777 276)">
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

export default SvgCardthick;
