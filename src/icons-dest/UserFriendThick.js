import * as React from "react";

function SvgUserfriendthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"user friend thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M20 12.083v4.112l-1.442 1.441h-5.83v-1.818h5.077l.377-.376v-3.103a4.115 4.115 0 00-3.92-2.884c-1.227 0-2.38.542-3.162 1.488l-1.401-1.16a5.906 5.906 0 014.563-2.147 5.94 5.94 0 015.705 4.327l.033.12zm-10 3.359l-.376.376h-7.43l-.376-.376v-.401c.523-1.664 2.224-2.86 4.091-2.86s3.568 1.196 4.091 2.86v.4zm-4.09-5.078c-2.71 0-5.18 1.808-5.877 4.301l-.033.12v1.41l1.442 1.441h8.934l1.442-1.441v-1.41l-.033-.12c-.696-2.493-3.167-4.301-5.876-4.301zm0-5.455c.75 0 1.363.612 1.363 1.364 0 .752-.612 1.363-1.364 1.363a1.365 1.365 0 01-1.364-1.363c0-.752.612-1.364 1.364-1.364zm0 4.546a3.186 3.186 0 003.18-3.182A3.186 3.186 0 005.91 3.09a3.186 3.186 0 00-3.183 3.182A3.186 3.186 0 005.91 9.455zm8.18-7.273c.753 0 1.365.612 1.365 1.364 0 .751-.612 1.363-1.364 1.363a1.365 1.365 0 01-1.364-1.363c0-.752.612-1.364 1.364-1.364zm0 4.545a3.186 3.186 0 003.183-3.181A3.186 3.186 0 0014.09.364a3.186 3.186 0 00-3.182 3.182 3.186 3.186 0 003.182 3.181z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserfriendthick;
