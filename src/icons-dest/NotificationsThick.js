import * as React from "react";

function SvgNotificationsthick(props) {
  return (
    <svg
      width={18}
      height={19}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M16.613 17.31h-9.18c-.018-1.853-.057-5.893-.057-6.101 0-2.516 2.085-4.563 4.648-4.563 2.562 0 4.646 2.047 4.646 4.563 0 .21-.039 4.249-.057 6.102zm1.864-.323c.02-1.967.043-5.615.043-5.778 0-2.985-2.08-5.492-4.882-6.204.046-.152.077-.311.077-.48a1.692 1.692 0 00-3.383 0c0 .169.031.327.077.48-2.802.711-4.882 3.218-4.882 6.204 0 .162.024 3.843.042 5.818l-1.902.77.02 1.363h6.66c.079.861.795 1.54 1.677 1.54s1.597-.679 1.676-1.54h6.596l.037-1.36-1.856-.813z"
          id="notifications_thick_svg__a"
        />
      </defs>
      <use
        fill="#62656E"
        xlinkHref="#notifications_thick_svg__a"
        transform="translate(-3 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgNotificationsthick;
