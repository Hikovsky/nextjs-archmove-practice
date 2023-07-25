import Image from "next/image";
import StyledButton from "@/components/styledButton";

export default function HomeSection () {
  return (
    <section id="home" className="py-[3rem] sm:py-[4rem]">
      <h1 className="font-title font-extrabold text-[3rem] mb-[2rem] sm:text-[6rem] sm:mb-[4rem] leading-[100%]">
        Build Your <br />
        Dream <span className="text-c-orange">House</span>
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-[1rem]">
        <div className="mb-[2.5rem]">
          <p className="font-primary text-[1rem] mb-[1.5rem] sm:mb[2.5rem]">
            100% guaranteed build safe,<br />
            comfortable and transparent with a<br />
            project management for the best result
          </p>
          <StyledButton />
        </div>
        <div className="min-w-max sm:w-[47.8125rem] min-h-[13.41175rem] sm:h-[30rem] relative">
          <Image src="/png/dreamHouse.png" alt="house image" fill />
        </div>
      </div>
    </section>
  )
}
