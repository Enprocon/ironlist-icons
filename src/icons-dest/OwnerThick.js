import * as React from "react";

function SvgOwnerthick({ title, titleId, ...props }) {
  return (
    <svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"owner thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8.312 2.532c1.171 0 2.124.953 2.124 2.124 0 1.17-.953 2.124-2.124 2.124a2.127 2.127 0 01-2.124-2.124c0-1.171.953-2.124 2.124-2.124zm0 5.947a3.827 3.827 0 003.823-3.823A3.827 3.827 0 008.312.833a3.828 3.828 0 00-3.823 3.823 3.828 3.828 0 003.823 3.823zm4.32 9.344H1.515l-.85-.85c0-4.216 3.43-7.645 7.646-7.645 1.102 0 2.147.239 3.095.66 0 0 .02-.018-.005.004-.15.133-.404 1.159-.085 1.714.005.007-.053-.11 0-.011.038.069-1.592-.708-3.005-.668-2.99.085-5.472 2.219-5.886 5.097H12.63v1.699zm1.882-5.402a1.38 1.38 0 110-2.761 1.38 1.38 0 010 2.761zm0-4.164A2.819 2.819 0 0012.1 9.638a2.772 2.772 0 00-.406 1.438c0 .49.13.947.35 1.348.106.185.262.436.445.603.254.265.558.485.897.637v4.742l1.127 1.128 1.127-1.128v-1.328l-.498-.793.498-.865v-1.756a2.82 2.82 0 00-1.127-5.407z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgOwnerthick;
