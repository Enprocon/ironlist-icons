import * as React from "react";

function SvgDeletethick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"delete thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M6.075 0L5.53.96l.545 1.008h5.968L12.511.96 12.043 0H6.075zM1.41 3.244l-.982.982.982.983h.933v13.556l.983.983h11.396l.982-.983V5.21h.885l.981-.983-.981-.982H1.41zm2.898 14.54h9.431V5.208H4.31v12.574zm5.698-10.561v8.596l.96.705 1.005-.705V7.223l-.983-.712-.982.712zm-3.831 0v8.596l.93.728 1.034-.728V7.223l-.982-.712-.982.712z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgDeletethick;
