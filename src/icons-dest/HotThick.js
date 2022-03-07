import * as React from "react";

function SvgHotthick({ title, titleId, ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{"hot thick"}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M5.103 5.505l-.061.061c-.881.9-1.523 2.079-1.857 3.412-.566 2.26-.386 4.368.494 5.784.282.453.627.878 1.026 1.266a7.473 7.473 0 001.87 1.321c.012-.12.03-.242.053-.365a5.132 5.132 0 01.674-1.718c.218-.353.481-.687.784-.992.146-.146.302-.288.466-.422.378-.318.921-.776 1.544-.356.371.247.708.523.997.819.55.561.975 1.249 1.228 1.989.09.262.154.533.196.811l.076-.053c.972-.68 1.753-1.35 2.387-2.05.767-.845 1.107-1.524 1.212-2.419a7.036 7.036 0 00-.294-2.978 7.036 7.036 0 00-1.345-2.378c-.203-.236-.422-.451-.654-.68-.472-.463-.96-.943-1.35-1.634a8.37 8.37 0 01-.887-2.387 3.328 3.328 0 00-.308.24A5.634 5.634 0 009.51 6.132c-.069.454-.04.923-.009 1.42.02.309.04.629.038.966a.952.952 0 01-1.464.798l-.087-.054a3.365 3.365 0 01-.406-.279c-.676-.557-1.61-1.49-2.211-2.75a4.486 4.486 0 01-.269-.728zm6.584 14.206c-.209 0-.413-.059-.589-.174l-.026-.018a1.093 1.093 0 01-.445-.727c-.037-.246-.005-.454.018-.606.004-.03.01-.061.012-.089.01-.142.01-.282.004-.421a2.792 2.792 0 00-.143-.757 3.396 3.396 0 00-.95-1.429 3.58 3.58 0 00-.645.775 3.22 3.22 0 00-.424 1.08c-.062.317-.048.658-.033 1.052l.011.297a.954.954 0 01-1.041.975c-.344-.032-.66-.16-.913-.26l-.07-.03a9.464 9.464 0 01-3.074-1.984 8.595 8.595 0 01-1.317-1.628C.486 13.233.93 10.136 1.337 8.515c.416-1.66 1.227-3.141 2.345-4.282.363-.37.742-.692 1.129-.957.187-.13.401-.24.601-.312a.949.949 0 011.248.68c.052.22.092.435.13.65.075.419.14.781.302 1.12.13.274.296.55.491.82.01-.128.025-.258.045-.39a7.542 7.542 0 012.464-4.494c.41-.364.83-.608 1.236-.845.19-.11.38-.22.566-.344a.95.95 0 011.455 1.013c.01.091.037.267.104.599l.02.098a6.61 6.61 0 00.734 2.115c.259.457.615.808 1.028 1.214.25.245.507.498.762.795a8.954 8.954 0 011.712 3.029 8.952 8.952 0 01.374 3.79c-.19 1.631-.962 2.673-1.692 3.479-.73.805-1.616 1.568-2.706 2.33-.232.162-.47.317-.706.472l-.434.287c-.085.06-.202.143-.35.213a1.197 1.197 0 01-.508.116z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgHotthick;
