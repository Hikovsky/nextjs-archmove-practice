import React, {ReactNode} from "react";

interface ICardProps {
  description: string
  title: string,
  children: ReactNode;
}

const Card: React.FC<ICardProps> = ({title, description, children}) => {
  return (
    <div className="flex flex-row items-start gap-[1rem] sm:gap[2.375rem]">
      <div className="h-[4rem] w-[4rem]">
        {children}
      </div>
      <div className="font-primary text-[1rem] leading-[160%] flex flex-col gap-[0.5rem]">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
