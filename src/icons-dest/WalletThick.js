import * as React from "react";

function SvgWalletthick(props) {
  return (
    <svg
      width={20}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M21 5l1 1.052v13.896L21 21H3l-1-1.052V6.052L3 5h18zm-1 2.104H4v11.792h16v-2.275h-6.5l-1-1.052v-5.22l1-1.052H20V7.104zm0 4.297h-5.5v3.117H20V11.4zm-2.769.738l.101.006c.398.052.706.408.707.84l-.006.107c-.05.42-.388.743-.8.744l-.1-.007c-.399-.051-.707-.407-.708-.84l.006-.106c.05-.42.388-.743.8-.744z"
          id="wallet_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#wallet_thick_svg__a"
        transform="translate(-2 -5)"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgWalletthick;
