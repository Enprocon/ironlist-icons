import * as React from "react";

function SvgToolsthick(props) {
  return (
    <svg
      width={10}
      height={17}
      viewBox="0 0 10 17"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"tools thick"}</title>
      <defs>
        <path
          d="M13.3 11.817l-.443.207v5.983l-.48.48h-.743l-.48-.48v-5.936l-.471-.198a3.226 3.226 0 01-.846-5.433v2.77l2.067 1.306 2.169-1.292V6.478a3.236 3.236 0 011.092 2.415 3.243 3.243 0 01-1.865 2.924m.267-7.4l-1.032-.378v4.31l-.607.362-.552-.348V4.037l-1.025.361a4.775 4.775 0 00-3.186 4.495c0 1.749.946 3.334 2.45 4.169v5.582l1.382 1.381h2.018l1.38-1.38v-5.672a4.789 4.789 0 002.308-4.08 4.783 4.783 0 00-3.136-4.476"
          id="tools_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#tools_thick_svg__a"
        transform="translate(-7 -4)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgToolsthick;
