import * as React from "react";

function SvgBankthick(props) {
  return (
    <svg
      width={20}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12.333 3l-.87.004L2 8.026l.438 1.908h.923v9.103h-.138l-.933 1.06.933.903H20.777l.933-.904-.933-1.06h-.137V9.935h.93L22 8.022 12.333 3zm-.426 2.032l5.553 2.885H6.47l5.437-2.885zm1.06 14.005h5.74V9.934h-5.74v9.103zM5.294 9.934h5.74v9.103h-5.74V9.934z"
          id="bank_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#bank_thick_svg__a"
        transform="translate(-2 -3)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBankthick;
