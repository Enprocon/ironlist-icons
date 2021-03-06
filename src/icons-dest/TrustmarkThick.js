import * as React from "react";

function SvgTrustmarkthick({ title, titleId, ...props }) {
  return (
    <svg
      width={15}
      height={18}
      viewBox="0 0 15 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"trustmark thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M11.393 3.639l5.818 1.56.928 1.261-.037 2.93-.018 2.504v.283l.002.212.012.422c.034 2.185-.818 4.018-2.51 5.388-.21.169-.475.365-.792.586l-.404.277-.678.448c-.28.181-.567.364-.854.544l-.239.15-.538.33h-1.681l-.616-.379-.373-.238A27.754 27.754 0 017.81 18.8a15.208 15.208 0 01-1.344-1.126 7.107 7.107 0 01-.697-.758c-.828-1.064-1.262-2.232-1.267-3.453l-.001-.195v-.965L4.545 6.2l.966-1.083 5.882-1.478zm-.014 1.721L6.413 6.608l-.208.234-.015 1.667-.02 3.054-.002 1.891c.004.84.306 1.655.916 2.438.137.175.316.37.534.578.327.313.732.65 1.196 1a26.124 26.124 0 001.686 1.165l.37.232h.743l.78-.49c.278-.176.551-.354.812-.526l.13-.087.294-.199c.384-.262.695-.487.91-.662 1.345-1.088 1.97-2.503 1.886-4.276l-.005-.177a27.992 27.992 0 01-.002-.372v-.336l.001-.403.045-4.342-.249-.34-4.836-1.297zm3.94 3.307v1.001l-4.675 4.563h-.81l-2-1.953v-1.002h1.041l1.365 1.331 4.037-3.94h1.042z"
          id="trustmark_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#trustmark_thick_svg__a"
        transform="translate(-4 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgTrustmarkthick;
