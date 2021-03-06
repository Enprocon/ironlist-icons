import * as React from "react";

function SvgTwitter({ title, titleId, ...props }) {
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
        <title id={titleId}>{"twitter"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.476 2 12 2zm0 1.53a8.47 8.47 0 100 16.94A8.47 8.47 0 0020.47 12 8.47 8.47 0 0012 3.53zm2.074 4.322c.603 0 1.207.225 1.584.603.377 0 1.055-.226 1.357-.453-.15.453-.604.98-.905 1.207.528 0 1.054-.227 1.206-.302-.3.377-.603.754-1.055 1.056.15 3.394-2.564 6.185-6.108 6.185-1.207 0-2.338-.303-3.469-.906 1.508.226 2.79-.529 3.167-.906-.98 0-1.885-.829-1.96-1.433.226 0 .678.076.905-.075-1.282-.301-1.659-1.281-1.659-2.035.226.227.753.227.98.227-.754-.454-1.282-1.66-.679-2.79 1.131 1.356 2.866 2.11 4.525 2.185-.076-.15-.076-.301-.076-.452 0-1.13.981-2.11 2.187-2.11z"
          id="twitter_svg__a"
        />
      </defs>
      <use
        xlinkHref="#twitter_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgTwitter;
