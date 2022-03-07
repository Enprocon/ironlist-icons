import * as React from "react";

function SvgCallrequestthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"call request thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M19.652 7.026h-1.504v-5.02H16.57l-.001 5.02h-1.505l-.382.663 2.676 3.039 2.677-3.04-.383-.662zm-15.546-.99c-.03 1.18.15 5.654 4.15 9.654 3.998 3.999 8.47 4.178 9.655 4.149l1.89-1.5v-2.844l-.976-1.245-3.071-.002-2.432 2.349-.674-.354c-.064-.035-1.595-.847-2.847-2.099-1.252-1.251-2.064-2.783-2.098-2.847l-.36-.686 2.424-2.43V5.534L8.339 4.105H5.645l-1.54 1.93zm13.638 15.909c-1.75 0-6.637-.426-10.977-4.767C1.482 11.894 2 5.8 2.025 5.543l.03-.312L4.632 2H9.21l2.663 2.663v4.389L9.958 10.97c.305.473.77 1.123 1.331 1.686.568.567 1.224 1.034 1.697 1.339l1.918-1.853 4.947.004 2.055 2.622v4.588l-3.193 2.534-.31.03a7.531 7.531 0 01-.659.025z"
          id="call_request_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#call_request_thick_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallrequestthick;
