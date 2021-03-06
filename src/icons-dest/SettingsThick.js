import * as React from "react";

function SvgSettingsthick({ title, titleId, ...props }) {
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
        <title id={titleId}>{"settings thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M12.693 2.912l.682.683V4.88a7.29 7.29 0 012.744 1.136l.908-.909h.965l.98.98v.965l-.909.909a7.283 7.283 0 011.137 2.743h1.284l.683.683v1.385l-.683.682H19.2a7.283 7.283 0 01-1.137 2.744l.908.908v.965l-.98.98h-.964l-.908-.909a7.283 7.283 0 01-2.744 1.137v1.284l-.682.683h-1.385l-.683-.683V19.28a7.283 7.283 0 01-2.743-1.137l-.909.909h-.965l-.98-.98v-.965l.909-.908A7.283 7.283 0 014.8 13.454H3.516l-.683-.682v-1.385l.683-.683H4.8a7.283 7.283 0 011.136-2.743l-.909-.909v-.965l.98-.98h.965l.909.909a7.29 7.29 0 012.743-1.136V3.595l.683-.683h1.385zM12 6.58a5.506 5.506 0 00-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5zm0 1.644a3.86 3.86 0 013.857 3.856A3.86 3.86 0 0112 15.936a3.86 3.86 0 01-3.856-3.857A3.86 3.86 0 0112 8.223zm0 1.833a2.025 2.025 0 00-2.023 2.023c0 1.116.908 2.023 2.023 2.023a2.025 2.025 0 002.023-2.023A2.025 2.025 0 0012 10.056z"
          id="settings_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#settings_thick_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSettingsthick;
