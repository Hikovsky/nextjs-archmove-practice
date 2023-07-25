import Image from "next/image";

export default function QuotesSection () {
  return (
    <section id="" className="py-[3rem] sm:py-[5rem]">
      <h2 className="font-title font-extrabold text-[2.5rem] sm:text-[3rem] leading-[124%]">
        Sound Too Good<br />
        To Be True?
      </h2>
      <div className="mt-[4rem] flex flex-row-reverse">
        <div className="flex flex-col items-start sm:flex-row gap-[3rem] sm:w-3/5">
          <Image src="/svg/quotationMark.svg" alt="quote icon" width={57} height={39} />
          <div className="">
            <p className="font-primary text-[1.5rem] sm:text-[2.25rem] leading-[160%]">“We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.”</p>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-[2.5rem]">
              <p className="font-primary text-[1rem] leading-[160%]">Adam Morph — CEO Alfatech</p>
              <div className="flex flex-row gap-[0.5rem] mt-[2.5rem] sm:mt-0">
                <button className="p-[0.875rem] border-none rounded-[0.25rem] bg-c-gray cursor-pointer">
                  <Image src="/svg/arrow-left.svg" alt="previous button" width={20} height={20} />
                </button>
                <button className="p-[0.875rem] border-none rounded-[0.25rem] bg-c-gray cursor-pointer">
                  <Image src="/svg/arrow-right.svg" alt="previous button" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
