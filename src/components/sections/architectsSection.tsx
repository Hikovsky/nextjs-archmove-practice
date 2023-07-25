"use client"
import Image from "next/image";
import Card from "@/components/card";
import StyledButton from "@/components/styledButton";
import shieldIcon from "@/components/svg/shieldIcon";
import feesIcon from "@/components/svg/feesIcon";
import houseIcon from "@/components/svg/houseIcon";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ArchitectsSection() {
  const { theme } = useTheme()
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(theme === 'dark' ? 'white' : 'black')
  }, [theme])

  const cardItems = [
    {
      icon: "shieldIcon",
      title: "100% guaranteed project completion",
      description: "Build safe, comfortable and transparent with a project management application with a joint account."
    },
    {
      icon: "feesIcon",
      title: "No additional fees",
      description: "There are no hidden costs. The value of the offer you get is the value you paid."
    },
    {
      icon: "houseIcon",
      title: "Get escort from the Team",
      description: "Monitor reports from the Arsitag team who check directly in the field."
    },
  ]

  const icons = {
    "houseIcon": houseIcon,
    "feesIcon": feesIcon,
    "shieldIcon": shieldIcon
  }

  return (
    <section id="architects" className="py-[3rem] sm:py-[5rem]">
      <div className="flex flex-col sm:flex-row">
        <div className="min-w-max sm:w-2/5 aspect-architects relative">
          <Image src="/png/architects.png" alt="Build your needs with Archmove" fill />
        </div>
        <div className="sm:w-3/5 flex items-center justify-center">
          <div className="sm:max-w-[25.4375rem] mt-[2.5rem] sm:mt-0 flex flex-col sm:items-center sm:justify-evenly gap-[2.5rem]">
            <h2 className="font-title font-extrabold text-[2.5rem] sm:text-[3rem] leading-[124%]">
              Build your needs<br />
              with Archmove
            </h2>
            {cardItems.map(item => {
              // @ts-ignore
              const Component = icons[item.icon]
              return (
                <Card title={item.title} description={item.description}>
                  <Component color={color} />
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[2.5rem] sm:mt-[3.725rem]">
        <StyledButton />
      </div>
    </section>
  )
}
