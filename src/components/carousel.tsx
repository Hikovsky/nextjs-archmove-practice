"use client"
import Image from "next/image";
import React, {forwardRef, useImperativeHandle, useRef} from "react";

interface CarouselProps {
  items: Array<{url: string}>
}

export type CarouselHandler = {
  move: (value: number) => void;
};

const Carousel = forwardRef<CarouselHandler, CarouselProps>((props, ref) => {
  const carousel = useRef<HTMLDivElement | null>(null)
  let itemIndex = 0


  useImperativeHandle(ref, () => ({
    move(value: number) {
      if (!carousel.current) return
      else if (value > 0 && itemIndex === props.items.length - 1) return
      else if (value < 0 && itemIndex === 0) return
      itemIndex = itemIndex + value
      const translateValue = 329 * itemIndex
      carousel.current!.style.transform = `translateX(-${translateValue}px)`
    }
  }));

  return (
    <div ref={carousel} className="flex flex-row aspect-special gap-[1.5rem] transition-transform ease-linear duration-500">
      {props.items.map(item => {
        return (
          <div className="relative min-w-min max-w-[19rem] max-h-[27rem] aspect-special" key={item.url}>
            <Image src={item.url} alt="image-1" fill style={{objectFit: "cover"}} />
          </div>
        )
      })}
    </div>
  )
})

export default Carousel
