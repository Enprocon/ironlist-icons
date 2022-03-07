import * as React from "react";

function SvgSchedulemeetupthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"schedule meetup thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M6.188 0v1.136h7.588V0h2.28v1.136h2.805L20 2.232v16.672L18.86 20H1.14L0 18.904V2.232l1.14-1.096h2.769V0h2.279zM17.72 8.441H2.278v9.367h15.443V8.44zM15 10v1.592L9.871 17h-1.51L6 14.51v-1.592h1.51l1.607 1.694L13.49 10H15zM3.909 3.328h-1.63v2.92h15.443v-2.92h-1.667v.943h-.001l-1.139 1.096-1.139-1.096v-.943H6.188v.943h-.002L5.048 5.367 3.909 4.27v-.943z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSchedulemeetupthick;
