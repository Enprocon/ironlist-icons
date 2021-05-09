import * as React from "react";

function SvgBlueprintthick(props) {
  return (
    <svg
      width={19}
      height={19}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M3 3.848v17.275l.956.877h17.285l.759-.896V3.906L21.146 3H3.902L3 3.848zm1.806 16.334v-5.915h3.657v5.915H4.806zM15.648 9.274V5.815h-1.425v7.151h1.425V10.79h4.605v9.506h-4.838v-4.245h3.109v-1.194h-4.301v1.868h-2.54v1.45h2.54v2.121H9.907v-6.044h1.077V12.5H4.98V4.786h2.507V7.96H6.204v1.314h4.858V7.96H9.035V4.786h11.218v4.488h-4.605z"
          id="blueprint_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#blueprint_thick_svg__a"
        transform="translate(-3 -3)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBlueprintthick;
