import Image from "next/image";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeButton () {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  const [iconPath, setIconPath] = useState('/svg/light.svg')

  useEffect(() => {
    setIconPath(theme === 'dark' ? '/svg/light.svg' : '/svg/dark.svg')
  }, [theme])

  return (
    <button onClick={() => handleClick()} className="rounded-full p-[0.5rem] hover:cursor-pointer">
      <Image src={iconPath} alt="toggle theme button" width={24} height={24} />
    </button>
  )
}
