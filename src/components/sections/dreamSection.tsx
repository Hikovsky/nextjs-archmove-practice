import Image from "next/image";
import StyledButton from "@/components/styledButton";

export default function DreamSection () {
  return (
    <section className="py-[3rem] sm:py-[5rem]">
      <div className="flex flex-col sm:flex-row gap-[3rem] sm:items-center">
        <div className="min-w-max min-h=[29rem] sm:w-[31rem] sm:h-[42.75rem] aspect-dream relative">
          <Image src="/png/archmove.png" alt="house of your dream" fill />
        </div>
        <div className="text-center">
          <h2 className="font-title font-extrabold text-[3rem] sm:text-[4rem] leading-[100%] mb-[3rem]">
            Realize your <br />
            dream project <br />
            with <span className="text-c-orange">Archmove</span>
          </h2>
          <StyledButton />
        </div>
      </div>
    </section>
  )
}
