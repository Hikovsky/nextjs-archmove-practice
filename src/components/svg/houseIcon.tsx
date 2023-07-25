import React from "react";

interface IHouseIconProps {
  color: string
}

const HouseIcon: React.FC<IHouseIconProps> = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 56.5322V23.442L32.0324 8.15731L50.5 23.4719V56.5322H14.5Z" stroke={color} strokeWidth="4"/>
      <circle cx="32.5" cy="29.5322" r="5" stroke="#FD665E" strokeWidth="4"/>
    </svg>
  )
}

export default HouseIcon
