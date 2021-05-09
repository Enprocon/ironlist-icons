import * as React from "react";

function SvgViewthick(props) {
  return (
    <svg
      width={20}
      height={11}
      viewBox="0 0 20 11"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"view thick"}</title>
      <defs>
        <path
          d="M16.126 15.207a4.654 4.654 0 001.015-2.885 4.647 4.647 0 00-.938-2.789c1.831.734 2.801 1.755 3.125 2.15l.01 1.106c-.32.422-1.353 1.62-3.212 2.418zM4.658 12.754v-1.01c.387-.403 1.453-1.402 3.082-2.141a4.642 4.642 0 00-.883 2.719c0 1.014.332 1.956.896 2.736-1.805-.804-2.785-1.907-3.095-2.304zM12 15.456c-1.83 0-3.317-1.406-3.317-3.134s1.488-3.134 3.317-3.134c1.83 0 3.317 1.406 3.317 3.134S13.828 15.456 12 15.456zm9.15-4.268L21.043 11c-.021-.039-2.463-3.853-9.016-3.998-5.803-.124-9.02 3.921-9.048 3.962l-.146.213v2.011l.073.162c.019.042 2.54 4.207 9.099 4.34.092.003.182.003.272.003 6.132 0 8.777-4.238 8.799-4.282l.09-.18-.017-2.044z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-1342 -899)">
          <g id="Group" transform="translate(1340 892)">
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

export default SvgViewthick;
