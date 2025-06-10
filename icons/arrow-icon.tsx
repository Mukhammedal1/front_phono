import * as React from "react";
const ArrowIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={8}
    fill="none"
    {...props}
  >
    <path
      stroke="#999CA0"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 4.002 10.998 4m0 0L8.306 1.307M10.998 4 8.306 6.693"
    />
  </svg>
);
export default ArrowIcon;
