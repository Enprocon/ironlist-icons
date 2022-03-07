import * as React from "react";

function SvgIconsSocialShare({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18 20a2 2 0 11.001-4.001A2 2 0 0118 20M6 14a2 2 0 11.001-4.001A2 2 0 016 14M18 4a2 2 0 11-.001 4.001A2 2 0 0118 4m0 10a3.97 3.97 0 00-3.047 1.437l-5.008-2.892c.025-.179.055-.358.055-.545 0-.112-.024-.217-.033-.326l5.116-2.954A3.974 3.974 0 0018 10a4 4 0 10-4-4c0 .333.053.652.129.961L9.304 9.748A4 4 0 106 16c1.3 0 2.443-.63 3.174-1.59l4.903 2.83c-.048.247-.077.5-.077.76a4 4 0 104-4"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconsSocialShare;
