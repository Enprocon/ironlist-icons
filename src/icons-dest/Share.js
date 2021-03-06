import * as React from "react";

function SvgShare({ title, titleId, ...props }) {
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
        <title id={titleId}>{"share"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.476 2 12 2zm0 1.53a8.47 8.47 0 100 16.94A8.47 8.47 0 0020.47 12 8.47 8.47 0 0012 3.53zm2.71 2.832a2.142 2.142 0 110 4.285 2.13 2.13 0 01-1.562-.685l-2.74 1.582c.006.058.019.115.019.174 0 .1-.018.196-.03.293l2.681 1.548a2.128 2.128 0 011.633-.77 2.142 2.142 0 11-2.103 1.737l-2.626-1.517a2.125 2.125 0 01-1.699.852 2.142 2.142 0 111.77-3.35l2.584-1.491a2.14 2.14 0 01-.07-.515c0-1.184.96-2.143 2.143-2.143zm0 7.499a1.071 1.071 0 100 2.142 1.071 1.071 0 000-2.142zm-6.427-3.214a1.071 1.071 0 100 2.142 1.071 1.071 0 000-2.142zm6.428-3.213a1.071 1.071 0 100 2.142 1.071 1.071 0 000-2.142z"
          id="share_svg__a"
        />
      </defs>
      <use
        xlinkHref="#share_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgShare;
