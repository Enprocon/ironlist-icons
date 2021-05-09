import * as React from "react";

function SvgPlusthick(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"plus thick"}</title>
      <defs>
        <path
          d="M12.03 4.858l.82.707v5.618h5.93l.685.848-.686.848h-5.93v5.9l-.82.686-.85-.686v-5.9H5.565l-.707-.848.707-.847 5.615-.001V5.565l.85-.707z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-781 -688)">
          <g id="Group" transform="translate(777 684)">
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

export default SvgPlusthick;
