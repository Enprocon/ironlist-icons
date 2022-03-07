import * as React from "react";

function SvgSmsthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"sms thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M1.51 0L0 1.644v12.58L1.626 16h16.836L20 14.204V1.581L18.225 0H1.51zm2.07 2.12h12.461l-6.07 5.19-6.39-5.19zm14.43 1.034v10.228l-.426.499H2.464l-.474-.52V3.494l8.013 6.508 8.007-6.847z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSmsthick;
