import * as React from "react";

function SvgDeliverythick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"delivery thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M18.182 12.635h-.312A3.183 3.183 0 0015 10.818a3.183 3.183 0 00-2.87 1.816l-4.26.002A3.182 3.182 0 005 10.818a3.183 3.183 0 00-2.87 1.819h-.312v-10h10V8.09l.91.909h5.454V12.635zM15 15.364A1.365 1.365 0 0113.636 14c0-.752.612-1.364 1.364-1.364.752 0 1.364.612 1.364 1.364 0 .752-.612 1.364-1.364 1.364zm-10 0A1.365 1.365 0 013.636 14c0-.752.612-1.364 1.364-1.364.752 0 1.364.612 1.364 1.364 0 .752-.612 1.364-1.364 1.364zm10.91-10.91l2.045 2.728h-4.319V4.455h2.273zm.908-1.818h-3.182v-.909l-.909-.909H.91L0 1.728v11.82l.91.908h.945A3.184 3.184 0 005 17.181c1.6 0 2.924-1.188 3.145-2.728l3.71-.002A3.184 3.184 0 0015 17.182c1.6 0 2.924-1.188 3.145-2.728h.946l.909-.91V6.88l-3.182-4.243z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgDeliverythick;
