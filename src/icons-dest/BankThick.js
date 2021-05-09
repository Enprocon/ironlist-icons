import * as React from "react";

function SvgBankthick(props) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"bank thick"}</title>
      <defs>
        <path
          d="M12.333 3l-.87.004L2 8.026l.438 1.908h.923v9.103h-.138l-.933 1.06.933.903H20.777l.933-.904-.933-1.06h-.137V9.935h.93L22 8.022 12.333 3zm-.426 2.032l5.553 2.885H6.47l5.437-2.885zm1.06 14.005h5.74V9.934h-5.74v9.103zM5.294 9.934h5.74v9.103h-5.74V9.934z"
          id="path-1"
        />
      </defs>
      <g id="Icons" stroke="none" strokeWidth={1} fillRule="evenodd">
        <g id="Icons-[All-Platforms]" transform="translate(-778 -183)">
          <g id="Group" transform="translate(776 180)">
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

export default SvgBankthick;
