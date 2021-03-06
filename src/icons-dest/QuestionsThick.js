import * as React from "react";

function SvgQuestionsthick({ title, titleId, ...props }) {
  return (
    <svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"questions thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          d="M7.925 9.414v1.667c-1.996 0-3.425 1.634-3.425 3.642 0 2.01 1.623 3.643 3.62 3.643h3.05l1.558.785v-4.207l.31-.31h1.047l.31.31v5.217l-1.507.935-2.115-1.063H8.12c-2.914 0-5.286-2.382-5.286-5.31 0-2.928 2.177-5.31 5.092-5.31zm7.35-6.58c3.02 0 5.478 2.468 5.478 5.502s-2.457 5.502-5.478 5.502h-2.777L10.3 14.943l-1.537-.956V8.336c0-3.034 2.457-5.503 5.478-5.503zm0 1.666h-1.033c-2.101 0-3.811 1.72-3.811 3.836v4.676l1.671-.84h3.173c2.101 0 3.811-1.721 3.811-3.836 0-2.115-1.71-3.836-3.811-3.836zm-.109 4.984v1.393h-1.445V9.484h1.445zm-.23-3.686c.486 0 .874.12 1.163.358.289.24.433.593.433 1.062 0 .258-.059.485-.177.68a1.234 1.234 0 01-.499.46c-.215.11-.46.17-.736.173v.467h-1.366V7.605h.552c.262 0 .462-.03.598-.088.135-.06.203-.157.203-.293a.248.248 0 00-.062-.177.214.214 0 00-.161-.066c-.084 0-.147.027-.187.082a.343.343 0 00-.063.214h-1.373c-.013-.267.04-.514.161-.74.12-.225.308-.404.565-.538.256-.134.573-.2.95-.2z"
          id="questions_thick_svg__a"
        />
      </defs>
      <use
        xlinkHref="#questions_thick_svg__a"
        transform="translate(-2 -2)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgQuestionsthick;
