import * as React from "react";

function SvgGoogle(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"google"}</title>
      <defs>
        <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.476 2 12 2zm0 1.53a8.47 8.47 0 100 16.94A8.47 8.47 0 0020.47 12 8.47 8.47 0 0012 3.53zm.088 4.101c1.103-.05 2.138.42 2.981 1.078a15.55 15.55 0 01-1.133 1.15c-1.013-.688-2.455-.885-3.468-.09-1.45.982-1.518 3.304-.122 4.363 1.356 1.208 3.921.608 4.298-1.239-.85-.013-1.703 0-2.552-.027-.004-.499-.005-.995-.004-1.492 1.42-.005 2.842-.007 4.265.004.085 1.17-.074 2.413-.805 3.381-1.109 1.53-3.337 1.977-5.076 1.32-1.744-.649-2.982-2.456-2.834-4.299.04-2.253 2.153-4.226 4.45-4.149z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-357 -1640)">
          <g id="Group" transform="translate(355 1638)">
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

export default SvgGoogle;
