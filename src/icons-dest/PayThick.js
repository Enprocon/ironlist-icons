import * as React from "react";

function SvgPaythick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"pay thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M19.09.455l.91.944v7.238l-.91.909-.908-.91V2.274H1.818v8.182h7.273l.909.909-.91.909H4.546v3.259l2.196 2.196h7.427l1.286-1.287v-5.986c-.008-.41-.176-.91-.909-.91-.732 0-.9.5-.909.918V15h-.909c-.04 0-1.277.045-1.914 1.314l-1.627-.81a4.097 4.097 0 012.632-2.181v-2.868c0-1.096.727-2.727 2.727-2.727s2.728 1.631 2.728 2.727v6.74l-2.35 2.35H5.986l-3.259-3.258v-4.014H.793L0 11.364V1.399L.793.455h18.298zM10 4.09a1.818 1.818 0 110 3.636 1.818 1.818 0 010-3.636z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPaythick;
