import * as React from "react";

function SvgMorningthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"morning thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M16.374 17.059l.966.987-.966.988H3.608l-.965-.988.965-.987h12.766zm3.383-3.593v1.975H0v-1.975h19.757zM9.993 6.633c2.39 0 4.335 1.994 4.335 4.446v.103l-.966.988-.965-.988v-.103c0-1.362-1.079-2.472-2.404-2.472-1.324 0-2.403 1.11-2.403 2.472v.103l-.965.988-.966-.988v-.103c0-2.452 1.944-4.446 4.334-4.446zM0 11.384V9.41h5.143v1.974H0zm18.975-1.839l1.025.91-1.025.909H15.57l-1.025-.91 1.025-.909h3.405zM4.108 3.6l2.27 2.322v1.396H5.014l-2.27-2.322V3.6h1.365zm13.165-.417v1.365l-2.271 2.271h-1.366V5.453l2.271-2.271h1.366zM10 .455l.91 1.024v3.406L10 5.909l-.91-1.024V1.479L10 .455z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMorningthick;
