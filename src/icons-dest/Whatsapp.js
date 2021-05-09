import * as React from "react";

function SvgWhatsapp(props) {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.476 2 12 2zm0 1.53a8.47 8.47 0 100 16.94A8.47 8.47 0 0020.47 12 8.47 8.47 0 0012 3.53zm.285 2.91a5.149 5.149 0 11-2.754 9.497l-2.394.801.796-2.394a5.158 5.158 0 01-.796-2.755 5.148 5.148 0 015.148-5.149zm0 1.03a4.12 4.12 0 00-3.366 6.493l-.495 1.488 1.488-.495a4.119 4.119 0 102.373-7.486zM10.66 9.01l.047.005h.243c.078 0 .185-.031.283.232l.354.962c.032.067.052.145.006.226l-.138.21-.201.219c-.063.06-.135.129-.063.256.063.135.32.56.68.917.47.454.882.6 1.005.669.125.074.2.063.277-.02l.418-.484c.097-.128.18-.098.298-.058l.862.455c.127.067.21.1.234.153.03.062.02.316-.107.61-.104.287-.64.564-.876.577-.234.007-.242.183-1.523-.377-1.282-.561-2.054-1.931-2.116-2.02-.062-.085-.495-.708-.474-1.341.025-.63.356-.927.488-1.053.125-.133.264-.15.35-.133z"
          id="whatsapp_svg__a"
        />
      </defs>
      <use
        fill="#62656E"
        xlinkHref="#whatsapp_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgWhatsapp;
