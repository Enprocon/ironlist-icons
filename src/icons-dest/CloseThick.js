import * as React from "react";

function SvgClosethick(props) {
  return (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.586 0l-1.271 1.27L10 8.585 2.685 1.27 1.414 0H0v1.414l1.271 1.27L8.586 10l-7.315 7.315L0 18.585V20h1.414l1.271-1.271L10 11.414l7.315 7.315L18.586 20H20v-1.414l-1.27-1.271L11.414 10l7.316-7.316L20 1.414V0z"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgClosethick;
