import Image from "next/image";

export default function Footer() {
  const links = ["About Us", "How It Works", "Contact Us", "FAQ", "Privacy Policy"]
  return (
    <footer className="py-[3rem] sm:py-[5rem] flex flex-col items-center sm:flex-row-reverse sm:justify-between">
      <Image src="/svg/logo.svg" alt="logo" width={113} height={52} />
      <div className="flex flex-col sm:flex-row gap-[1rem] sm:gap-[2.5rem] mt-[2.5rem] sm:mt-0">
        {links.map(link => {
          return (
            <a href="#" className="font-primary text-[1rem] leading-[250%]" >{link}</a>
          )
        })}
      </div>
    </footer>
  )
}
