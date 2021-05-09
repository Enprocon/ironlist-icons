import * as React from "react";

function SvgCopythick(props) {
  return (
    <svg
      width={16}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M14.488 3.25l.845.833h3.182l.985 1.12v14.813l-.985.734H5.445l-.945-.734V5.202l.944-1.119H8.69l.821-.833h4.977zm3.172 2.482h-2.327v.015l-.833.836h-5l-.833-.833-.001-.018H6.397V19.13H17.66V5.732zm-2.327 9.601V17H8.667v-1.667h6.666zm0-3.333v1.667H8.667V12h6.666zm0-3.333v1.666H8.667V8.667h6.666z"
          id="copy_thick_svg__a"
        />
      </defs>
      <use
        fill="#62656E"
        xlinkHref="#copy_thick_svg__a"
        transform="translate(-4 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCopythick;
