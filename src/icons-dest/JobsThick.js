import * as React from "react";

function SvgJobsthick(props) {
  return (
    <svg
      width={18}
      height={17}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M8.638 3.667L7.003 5.102v1.31H5.611L3.667 8.362v9.245l1.893 2.057h12.814l1.96-2.027V8.195L18.217 6.41h-1.155v-.045h-.077V5.082L15.3 3.667H8.638zm.178 2.256l.506-.443h5.317l.533.448v.483H8.816v-.488zM5.48 9.113l.884-.888h11.192l.964.813V10.6H5.48V9.112zm10.167 4.535v-1.234h2.873v4.49l-.915.946H6.355l-.875-.95v-4.486h2.522v1.234l.614.338.615-.338v-1.234h5.187v1.234l.615.338.614-.338z"
          id="jobs_thick_svg__a"
        />
      </defs>
      <use
        fill="#62656E"
        xlinkHref="#jobs_thick_svg__a"
        transform="translate(-3 -3)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgJobsthick;
