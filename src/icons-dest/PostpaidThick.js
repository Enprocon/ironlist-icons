import * as React from "react";

function SvgPostpaidthick({ title, titleId, ...props }) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"postpaid thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M11.44 9.802c2.074 0 3.762 1.698 3.762 3.786 0 2.087-1.688 3.785-3.762 3.785s-3.76-1.698-3.76-3.785c0-2.088 1.686-3.786 3.76-3.786zM9.295.25l.625.245 2.914 2.694.295.677v5.61a4.585 4.585 0 00-1.689-.325c-.051 0-.102.007-.153.008V6.188H7.603l-.921-.921V2.092H2.077v12.895h4.93c.192.694.542 1.32 1.01 1.842H1.156l-.921-.921V1.17l.92-.921h8.14zm2.145 10.934c-1.312 0-2.38 1.078-2.38 2.404 0 1.326 1.068 2.404 2.38 2.404 1.313 0 2.38-1.078 2.38-2.404 0-1.326-1.067-2.404-2.38-2.404zm-.173.92l.384.38v1.096l.18-.18.172-.172.54.002.002.54-.336.337-.783.783h-.16l-.381-.002-.001-.379v-2.024l.383-.381zM5.969 13.11l.514.477-.514.477H3.615l-.513-.477.513-.477h2.354zM8.934 2.092h-.41v2.254h2.763v-.077L8.934 2.092z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPostpaidthick;
