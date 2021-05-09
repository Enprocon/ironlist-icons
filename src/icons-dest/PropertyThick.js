import * as React from "react";

function SvgPropertythick(props) {
  return (
    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.364 0l6.363 4.203v4.085h5.832L20 9.716v8.856L18.56 20H1.44L0 18.572V4.202L6.364 0zm0 2.162L1.818 5.167v12.657l.377.374h2.35v-4.504h3.637v4.504h2.727V5.167L6.364 2.162zm11.44 7.928h-5.077v8.108h5.078l.377-.374v-7.36l-.377-.374zM16.36 13v2h-2v-2h2zM6.25 8.125a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPropertythick;
