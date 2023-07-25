"use client"
import Image from "next/image";
import ThemeButton from "@/components/themeButton";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-[5rem]">
      <div className="w-[5.25rem] h-[2.375rem] sm:w-[3.75rem] sm:flex:h-[1.75rem] relative">
        <Image src="/svg/logo.svg" alt="logo" fill />
      </div>
      <div className="flex flex-row items-center gap-[1.75rem]">
        <button className="rounded-full p-[0.5rem] bg-black/[0.1] hover:cursor-pointer">
          <Image src="/svg/search.svg" alt="search button" width={17.59} height={17.59} />
        </button>
        <ThemeButton />
        <button className="py-[0.66rem] px-[0.33rem] hover:cursor-pointer">
          <Image src="/svg/menu.svg" alt="menu button" width={21.33} height={10.67} />
        </button>
      </div>
    </header>
  )
}
