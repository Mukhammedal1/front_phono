import * as React from "react"
const ChatIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#4E46B4"
      d="M5.75 7.895a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9ZM5 12.645a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM5.75 15.895a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
    />
    <path
      fill="#4E46B4"
      fillRule="evenodd"
      d="M10.75.895C4.813.895 0 5.707 0 11.645v10c0 .414.336.75.75.75h10c5.937 0 10.75-4.813 10.75-10.75 0-5.938-4.813-10.75-10.75-10.75ZM1.5 11.645a9.25 9.25 0 1 1 9.25 9.25H1.5v-9.25Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ChatIcon
