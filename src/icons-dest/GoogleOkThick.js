import * as React from "react";

function SvgGoogleokthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"google ok thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M18.636 15.918c0-.255-.036-.5-.104-.736a2.714 2.714 0 00-1.205-1.586 2.725 2.725 0 00-4.145 2.323c0 .508.145.99.395 1.399a2.727 2.727 0 002.332 1.323 2.728 2.728 0 002.727-2.723zm-6.818 0a4.09 4.09 0 016.018-3.605c.223-.74.346-1.518.346-2.331 0-4.5-3.673-8.168-8.182-8.168-4.51 0-8.182 3.668-8.182 8.168 0 4.505 3.673 8.168 8.182 8.168.795 0 1.564-.118 2.29-.332a4.07 4.07 0 01-.472-1.9zm7.487-2.277c.436.645.695 1.432.695 2.277A4.086 4.086 0 0115.91 20a4.103 4.103 0 01-2.305-.709 9.99 9.99 0 01-3.605.672c-5.514 0-10-4.476-10-9.981S4.486 0 10 0s10 4.477 10 9.982c0 1.29-.25 2.522-.695 3.659zm-3.85 2.672l-.137-.131-.718-.718h-.964v.958l1.337 1.337h.963l2.246-2.241v-.963h-.964l-1.763 1.758zm-1.819-6.572c0 2.382-1.595 4.072-4.009 4.072A4.167 4.167 0 015.455 9.65a4.17 4.17 0 014.172-4.168c1.128 0 2.073.413 2.796 1.086l-1.178 1.173v-.004a2.31 2.31 0 00-1.618-.628c-1.377 0-2.495 1.16-2.495 2.536 0 1.373 1.118 2.537 2.495 2.537 1.25 0 2.1-.709 2.278-1.69H9.627V8.867h3.928c.054.278.081.568.081.873z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgGoogleokthick;
