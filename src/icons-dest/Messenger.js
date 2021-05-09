import * as React from "react";

function SvgMessenger(props) {
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.53a8.47 8.47 0 100 16.94 8.47 8.47 0 100-16.94zm0 3.155c2.923 0 5.315 2.2 5.315 4.917 0 2.717-2.392 4.917-5.315 4.917-.527 0-1.03-.075-1.51-.204l-1.834 1-.032-1.914c-1.184-.904-1.94-2.267-1.94-3.8 0-2.715 2.392-4.916 5.316-4.916zm3.355 3.604l-2.58 1.312-1.37-1.312-2.86 2.994 2.679-1.4 1.324 1.4 2.807-2.994z"
          id="messenger_svg__a"
        />
      </defs>
      <use
        xlinkHref="#messenger_svg__a"
        transform="translate(-2 -2)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMessenger;
