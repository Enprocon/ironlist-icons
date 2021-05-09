import * as React from "react";

function SvgTransferthick(props) {
  return (
    <svg
      width={19}
      height={12}
      viewBox="0 0 19 12"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"transfer thick"}</title>
      <defs>
        <path
          d="M20.3 6.36l.683.777v9.5l-.683.777H7.16l-.682-.776V7.137l.683-.776H20.3zM5.19 14.897v1.701h-.065v.001H3.75l-.917-.851.917-.852h1.44zm14.09-6.839H8.173v7.672H19.28V8.057zm-5.364 2.2a1.552 1.552 0 110 3.105 1.552 1.552 0 010-3.105zm-8.791.796h.066v1.702H3.75l-.917-.85.917-.852h1.375zm0-3.842h.066v1.702H3.75l-.917-.85.917-.852h1.375z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-780 -898)">
          <g id="Group" transform="translate(778 892)">
            <mask id="mask-2">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Combined-Shape" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgTransferthick;
