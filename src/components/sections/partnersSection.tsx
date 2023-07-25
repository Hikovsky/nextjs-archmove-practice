"use client"
import React, {useEffect, useState} from "react";
import UTurn from "@/components/svg/partners/uTurn";
import NextMove from "@/components/svg/partners/nextMove";
import PinPoint from "@/components/svg/partners/pinPoint";
import Leafe from "@/components/svg/partners/leafe";
import Terra from "@/components/svg/partners/terra";
import Dune from "@/components/svg/partners/dune";
import {useTheme} from "next-themes";

export default function PartnersSection() {
  const { theme} = useTheme()
  const partners = [
    "UTurn",
    "NextMove",
    "PinPoint",
    "Leafe",
    "Terra",
    "Dune",
  ]
  const components = {
    "UTurn": UTurn,
    "NextMove": NextMove,
    "PinPoint": PinPoint,
    "Leafe": Leafe,
    "Terra": Terra,
    "Dune": Dune,
  }
  const [color, setColor] = useState("black")

  useEffect(() => {
    setColor(theme === 'dark' ? 'gray' : 'black')
  }, [theme])

  return (
    <section id="partners" className="py-[3rem] sm:pt-[4rem]">
      <h2 className="font-title text-[2.35rem] sm:text-[3rem] leading-[124%]">Our Partners</h2>
      <div className="mt-[2.5rem] flex flex-row flex-wrap gap-[1.5rem] justify-center sm:justify-center">
        {partners.map(partner => {
          // @ts-ignore
          const Component = components[partner]
          return (
            <div key={partner} className="h-[4rem] p-[1rem] flex items-center justify-center">
              <Component color={color} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
