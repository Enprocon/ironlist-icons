import * as React from "react";

function SvgHidethick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"hide thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M15.893 15.377a5.009 5.009 0 00.081-5.896c1.795.761 2.746 1.822 3.063 2.23l.01 1.148c-.314.438-1.329 1.688-3.154 2.518zM4.659 12.823v-1.048a10.128 10.128 0 013.02-2.22 5.013 5.013 0 00-.865 2.82c0 1.052.325 2.029.878 2.838-1.769-.834-2.729-1.979-3.033-2.39zm3.943-.448a3.255 3.255 0 013.252-3.252c.5 0 .97.117 1.393.319L9 13.93a3.233 3.233 0 01-.398-1.556zm6.503 0a3.255 3.255 0 01-3.251 3.251c-.58 0-1.124-.154-1.597-.422l4.333-4.579c.324.506.515 1.106.515 1.75zm5.717-1.177l-.104-.194c-.013-.026-1.079-1.77-3.657-2.989l1.8-1.902-.081-1.193-1.216-.04-2.327 2.459c-.97-.27-2.08-.453-3.356-.483-5.682-.139-8.84 4.068-8.868 4.11l-.143.222v2.087l.072.168c.012.028 1.06 1.841 3.53 3.158l-1.346 1.423.137 1.123 1.16.11 1.809-1.913a12.483 12.483 0 003.896.604c6.008 0 8.6-4.397 8.622-4.442l.09-.187-.018-2.121z"
          id="hide_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#hide_thick_svg__a"
        transform="translate(-2 -4)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgHidethick;
