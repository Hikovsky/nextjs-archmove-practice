import React from "react";

interface IShieldIconProps {
  color: string
}

const ShieldIcon: React.FC<IShieldIconProps> = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.6273 56.4569C18.8481 48.0432 11.3572 34.9097 10.0857 20.5295L31.6239 6.88862L53.8748 20.5262C52.1284 34.9599 44.3962 48.0209 32.5344 56.4937L31.6066 57.1564L30.6273 56.4569Z" stroke={color} strokeWidth="4"/>
      <path d="M25.5 29.4316L30.508 34.4396L40.4075 24.5401" stroke="#FD665E" strokeWidth="4"/>
    </svg>
  )
}

export default ShieldIcon
