import * as React from "react";

function SvgCopythick(props) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"copy thick"}</title>
      <defs>
        <path
          d="M14.488 3.25l.845.833h3.182l.985 1.12v14.813l-.985.734H5.445l-.945-.734V5.202l.944-1.119H8.69l.821-.833h4.977zm3.172 2.482h-2.327v.015l-.833.836h-5l-.833-.833-.001-.018H6.397V19.13H17.66V5.732zm-2.327 9.601V17H8.667v-1.667h6.666zm0-3.333v1.667H8.667V12h6.666zm0-3.333v1.666H8.667V8.667h6.666z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-1062 -279)">
          <g id="Group" transform="translate(1058 276)">
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

export default SvgCopythick;
