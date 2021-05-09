import * as React from "react";

function SvgIcCompare(props) {
  return (
    <svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"ic_compare"}</title>
      <defs>
        <path
          d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          id="path-2"
        />
        <path id="path-4" d="M0 0h50v50H0z" />
        <filter colorInterpolationFilters="auto" id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.560784 0 0 0 0 0.568627 0 0 0 0 0.592157 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g
          id="Listing-list-card/desktop/rent[constr-1]"
          transform="translate(-809 -159)"
        >
          <g
            id="ic_compare"
            transform="translate(806 158)"
            filter="url(#filter-1)"
          >
            <mask id="mask-3">
              <use xlinkHref="#path-2" />
            </mask>
            <g id="Group" mask="url(#mask-3)">
              <g transform="translate(-13 -13)" id="\uD83C\uDFA8-Color">
                <mask id="mask-5">
                  <use xlinkHref="#path-4" />
                </mask>
                <use id="Black" xlinkHref="#path-4" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgIcCompare;
