import * as React from "react";

function SvgFacebook(props) {
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.53a8.47 8.47 0 100 16.94 8.47 8.47 0 100-16.94zm2.456 3.528v1.35h-1.437c-.361 0-.675.348-.675.74v1.48h2.111v1.263h-2.111v5.05h-1.573v-5.05H8.929v-1.262h1.842V8.887c0-1.002.809-1.83 1.797-1.83h1.888z"
          id="facebook_svg__a"
        />
      </defs>
      <use
        xlinkHref="#facebook_svg__a"
        transform="translate(-2 -2)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgFacebook;
