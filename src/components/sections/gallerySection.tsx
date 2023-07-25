"use client"
import Image from "next/image";
import Carousel, { CarouselHandler } from "@/components/carousel";
import {useRef} from "react";

export default function GallerySection() {
  const ref = useRef<CarouselHandler>(null)
  const items = [
    { url: '/png/carousel-1.png' },
    { url: '/png/carousel-2.png' },
    { url: '/png/carousel-3.png' },
    { url: '/png/carousel-4.png' },
  ]
  const move = (value: number) => {
    if (!ref.current) return
    ref.current.move(value)
  }
  return (
    <section id="gallery" className="py-[3rem] sm:py-[5rem]">
      <div className="flex flex-col justify-between items-start sm:flex-row sm:items-end gap-[2rem] mb-[2rem] sm:mb-[2.5rem]">
        <h2 className="font-title text-[2.35rem] sm:text-[3rem] leading-[124%]">
          Build professional<br />
          valuable room
        </h2>
        <div className="flex flex-row gap-[0.5rem]">
          <button onClick={() => move(-1)} className="p-[0.875rem] border-none rounded-[0.25rem] bg-c-gray cursor-pointer">
            <Image src="/svg/arrow-left.svg" alt="previous button" width={20} height={20} />
          </button>
          <button onClick={() => move(1)} className="p-[0.875rem] border-none rounded-[0.25rem] bg-c-gray cursor-pointer">
            <Image src="/svg/arrow-right.svg" alt="previous button" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="relative max-h-[27rem] overflow-hidden">
        <Carousel items={items} ref={ref} />
      </div>
    </section>
  )
}
