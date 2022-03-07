import * as React from "react";

function SvgDocumentsthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"documents thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M17.791 3.667l.876 1.119V19.6l-.876.733H6.172l-.839-.733V4.786l.84-1.12H17.79zm-.76 1.649H7.02v13.397H17.03V5.316zM15.15 14.5v1.667H9.02V14.5h6.13zm0-3.006v1.667H9.02v-1.667h6.13zm0-3.23v1.667H9.02V8.265h6.13z"
          id="documents_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#documents_thick_svg__a"
        transform="translate(-5 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgDocumentsthick;
