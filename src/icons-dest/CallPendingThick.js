import * as React from "react";

function SvgCallpendingthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"call pending thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M9.35 2.5l2.53 2.53-.001 4.17-1.819 1.823a10 10 0 001.265 1.6 9.988 9.988 0 001.611 1.272l1.822-1.76 4.7.004 1.952 2.491v4.359l-3.033 2.407-.294.029c-.044.003-.265.023-.626.023-1.662 0-6.305-.404-10.429-4.529C2.995 12.887 2.52 8.358 2.501 6.605v-.2c.002-.31.019-.5.022-.54l.03-.295L4.998 2.5h4.35zm-.829 2H5.962L4.5 6.334 4.5 6.41v.176c.01 1.41.386 5.363 3.943 8.92 3.798 3.796 8.041 3.966 9.173 3.942l1.795-1.425V15.32l-.926-1.183-2.918-.001-2.31 2.231-.64-.337c-.062-.032-1.517-.804-2.705-1.993-1.19-1.189-1.961-2.643-1.993-2.705l-.343-.651 2.304-2.309V5.857L8.521 4.5zm9.035-1.867a3.808 3.808 0 013.804 3.804 3.808 3.808 0 01-3.804 3.805 3.809 3.809 0 01-3.804-3.805 3.809 3.809 0 013.804-3.804zm0 1.5a2.307 2.307 0 00-2.304 2.304 2.307 2.307 0 002.304 2.305 2.307 2.307 0 002.304-2.305 2.307 2.307 0 00-2.304-2.304zm0 .635l.5.5v.962l.659.659v.707h-.708l-.95-.952V5.268l.5-.5z"
          id="call_pending_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#call_pending_thick_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallpendingthick;
