import * as React from "react";

function SvgAttachmentthick(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"attachment thick"}</title>
      <defs>
        <path
          id="attachment_thick_svg__a"
          d="M12.498 3.667l-8.831 9.12v6.315l1.07 1.231h6.535l9.061-9.359V9.311l-3.98-4.113H14.74L6.916 13.28v3.592h4.023l5.11-5.278-1.171-1.21-4.626 4.778h-1.68v-1.174l6.975-7.204 3.25 3.358-8.21 8.481H5.322v-5.127l8.346-8.62z"
        />
      </defs>
      <use
        xlinkHref="#attachment_thick_svg__a"
        transform="translate(-3 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAttachmentthick;
