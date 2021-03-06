import * as React from "react";

function SvgReceivepaymentthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"receivepayment thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M8.098 2.2l7.744.035-.018 3.649-7.745-.034.02-3.65zm8.69 6.85l1.267.06 1.944 1.81.001 1.247-5.448 5.075-.67.258H6.12l-1.85 1.726-.664.258-2.653.016L0 18.62v-4.307l.24-.587 3.874-4.03.704-.293h8.101l.946.879.002.98 2.921-2.211zm.532 1.87l-3.85 2.973H7.84V12.13h4.137l-.002-.966H5.241L1.89 14.65v3.082l1.315-.007 1.853-1.728.668-.259h7.764l4.502-4.193-.673-.626zM7.196.5l9.566.043.905.852-.027 5.345-.915.843-9.565-.041-.905-.853.027-5.345L7.196.5zm4.772 2.133c-.835-.004-1.515.623-1.52 1.402-.004.778.67 1.412 1.506 1.415.835.004 1.516-.623 1.52-1.401.004-.778-.67-1.412-1.506-1.416z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgReceivepaymentthick;
