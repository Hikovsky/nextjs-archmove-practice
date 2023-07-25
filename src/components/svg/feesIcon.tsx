import React from "react";

interface IFeesIconProps {
  color: string
}

const FeesIcon: React.FC<IFeesIconProps> = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10.5322H50V54.5322H15V10.5322Z" stroke={color} strokeWidth="4"/>
      <path d="M36.2542 46.5322V45.2984C39.3077 45.034 41 43.4475 41 40.8623C41 38.659 39.7676 37.2978 37.3487 36.7984L36.2542 36.5829V33.5374C37.0452 33.6745 37.6246 34.3502 37.6522 35.1238H40.7425C40.7149 32.7932 38.9858 31.148 36.2542 30.8738V29.5322H34.9298V30.864C31.959 31.099 30.2483 32.6855 30.2483 35.2217C30.2483 37.3663 31.4808 38.7765 33.8353 39.3249L34.9298 39.5795V42.7327C33.9457 42.625 33.2375 41.9493 33.1915 41.0875H30C30.0092 43.5944 31.8211 45.1515 34.9298 45.3179V46.5322H36.2542ZM37.8545 41.2638C37.8545 42.0962 37.2567 42.6543 36.2542 42.7327V39.8145C37.3303 40.0299 37.8545 40.5098 37.8545 41.2638ZM33.4766 34.8888C33.4766 34.1348 34.0744 33.5766 34.9298 33.5178V36.2989C33.9824 36.0933 33.4766 35.6037 33.4766 34.8888Z" fill="#FD665E"/>
    </svg>
  )
}

export default FeesIcon