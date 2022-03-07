import * as React from "react";

function SvgServicesthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"services thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M18.567 17.593l-.356.356H5.538l-.356-.356v-.747l.356-.355H18.21l.356.355v.747zm-12.733-4.6l.853-1.242V8.73c0-.916.745-1.661 1.661-1.661h7.03c.916 0 1.661.745 1.661 1.661v3.062l.911 1.075v.307H5.834v-.182zm13.005 1.983h-6.315v-.286h6.941v-2.377l-.91-1.075V8.73a3.18 3.18 0 00-3.178-3.177h-2.853v-.372h1.4V3.667H9.661v1.515h1.348v.372h-2.66a3.18 3.18 0 00-3.177 3.177v2.55l-.853 1.24v2.17h6.69v.285H4.91l-1.244 1.243v2.002l1.244 1.243h13.928l1.244-1.243v-2.002l-1.244-1.243z"
          id="services_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#services_thick_svg__a"
        transform="translate(-3 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgServicesthick;
