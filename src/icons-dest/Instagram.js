import * as React from "react";

function SvgInstagram({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"instagram"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.476 2 12 2zm0 1.53a8.47 8.47 0 100 16.94A8.47 8.47 0 0020.47 12 8.47 8.47 0 0012 3.53zm2.525 3.296a3.014 3.014 0 013.009 3.011v4.327c0 1.66-1.35 3.01-3.01 3.01H9.477a3.013 3.013 0 01-3.01-3.01V9.837a3.013 3.013 0 013.01-3.01zm0 1.044h-5.05A1.968 1.968 0 007.51 9.837v4.327c0 1.085.88 1.967 1.966 1.967h5.049a1.969 1.969 0 001.966-1.967V9.837a1.969 1.969 0 00-1.966-1.967zM12 9.498c1.492 0 2.706 1.153 2.706 2.57 0 1.404-1.189 2.502-2.707 2.502-1.492 0-2.707-1.153-2.707-2.57 0-1.403 1.189-2.502 2.708-2.502zm0 .929c-.98 0-1.777.736-1.777 1.641 0 .874.83 1.641 1.777 1.641s1.776-.767 1.776-1.641c0-.905-.797-1.641-1.776-1.641zm2.785-2.016c.546 0 1.008.462 1.008 1.008s-.462 1.008-1.008 1.008a1.022 1.022 0 01-1.008-1.008c0-.546.462-1.008 1.008-1.008zm0 .658a.34.34 0 00-.352.35.34.34 0 00.352.35.34.34 0 00.35-.35.34.34 0 00-.35-.35z"
          id="instagram_svg__a"
        />
      </defs>
      <use
        xlinkHref="#instagram_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgInstagram;
