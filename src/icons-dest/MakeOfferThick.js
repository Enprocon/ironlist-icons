import * as React from "react";

function SvgMakeofferthick({ title, titleId, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"make offer thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M9.597 19.856l-1.224-1.611-.524-.303-2.008-.254-.253-2.008-.303-.523-1.611-1.224.784-1.866v-.604l-.784-1.866 1.611-1.224.303-.523.253-2.009 2.008-.253.524-.302 1.224-1.613 1.865.785h.605l1.866-.785 1.223 1.613.524.302 2.009.253.253 2.008.302.524 1.612 1.224-.784 1.866v.604l.784 1.866-1.612 1.224-.302.524-.253 2.007-2.009.254-.524.303-1.223 1.611-1.866-.784h-.605l-1.865.784zm5.213 1.426l1.39-1.833 2.285-.288.676-.677.288-2.282 1.833-1.392.248-.924-.892-2.12.892-2.122-.248-.924-1.832-1.392-.29-2.282-.675-.677-2.284-.288-1.391-1.833L13.886 2l-2.121.892L9.644 2l-.925.248L7.33 4.08l-2.284.288-.676.676-.289 2.283L2.248 8.72 2 9.644l.892 2.121L2 13.886l.248.924 1.832 1.392.289 2.283.676.676 2.283.288 1.391 1.833.925.248 2.121-.892 2.121.892.924-.248zm-.064-11.202l.68.68-.68.68v.003H13.4c-.326 1.432-1.503 2.103-2.52 2.269l2.176 2.17v.965h-.962l-3.304-3.291-.13-.794.611-.371h1.103c.059 0 1.177-.014 1.596-.948H8.916v-.002l-.68-.68.68-.681h3.143c-.17-.704-.64-.927-.853-.989h-2.29V9.09l-.68-.68.68-.681h2.435v-.002l.007.002h3.388l.68.68-.68.681v.002h-1.598c.142.278.247.607.302.989h1.296z"
          id="make_offer_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#make_offer_thick_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMakeofferthick;
