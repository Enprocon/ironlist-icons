import * as React from "react";

function SvgFacebookokthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"facebook ok thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M18.636 15.917a2.732 2.732 0 00-2.727-2.722 2.727 2.727 0 00-2.727 2.722c0 .512.145.993.395 1.401.35.581.914 1.021 1.582 1.212.236.068.491.109.75.109a2.727 2.727 0 002.727-2.722zm-6.818 0a4.087 4.087 0 014.091-4.084 4.11 4.11 0 011.927.48c.223-.739.346-1.52.346-2.331 0-4.5-3.673-8.167-8.182-8.167-4.51 0-8.182 3.666-8.182 8.167 0 4.505 3.673 8.167 8.182 8.167.795 0 1.564-.118 2.29-.331a4.063 4.063 0 01-.472-1.901zm7.487-2.278c.436.648.695 1.434.695 2.278A4.087 4.087 0 0115.91 20a4.109 4.109 0 01-2.305-.708 9.998 9.998 0 01-3.605.671c-5.514 0-10-4.477-10-9.981S4.486 0 10 0s10 4.478 10 9.982c0 1.293-.25 2.522-.695 3.657zM8.454 10.47v5.698c0 .077.064.154.154.154h2.117a.157.157 0 00.155-.154v-5.8h1.526c.078 0 .141-.065.154-.142l.129-1.732c.012-.09-.064-.167-.154-.167h-1.669V7.096a.52.52 0 01.526-.526h1.181a.156.156 0 00.154-.154V4.683a.156.156 0 00-.154-.154h-2.002a2.12 2.12 0 00-2.117 2.117v1.682H7.4a.156.156 0 00-.154.154v1.745c0 .077.064.154.154.154h1.053v.09zm9.728 4.092v.964l-2.246 2.246h-.963l-1.337-1.336v-.965h.964l.718.72.137.135 1.763-1.764h.964z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgFacebookokthick;
