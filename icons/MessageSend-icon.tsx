import * as React from "react"
const MessageSendIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    // inputValue={""}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#999CA0"}
      d="M2.25.25C1.423-.144.516.61.752 1.494L2.48 7.95a.857.857 0 0 0 .706.627l8.472 1.21c.245.035.245.39 0 .425l-8.471 1.209a.857.857 0 0 0-.706.627l-1.73 6.46c-.235.883.672 1.638 1.497 1.244l18.427-8.784c.814-.388.814-1.547 0-1.935L2.25.25Z"
    />
  </svg>
)
export default MessageSendIcon
