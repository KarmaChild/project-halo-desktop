import React from "react";
import Image from "next/image";

interface ServicePreviewProps {
    id: string
    title: string
    description: string
    price: number | 'Free'
}

export const ServicePreview:React.FC<ServicePreviewProps>  = ({ title, description, price}) => {
  return (
      <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5">
          <div className="absolute top-[24px] left-[15px]">
              <Image src="/icons/grip.png"
                     width={28}
                     height={28}
                     alt="&#8599"/>
          </div>

          <div className="absolute top-[10px] left-[370px]">
              <p className="text-20 font-regular">{price === 0 ? "Free" : `$${price}`}</p>
          </div>

          <div className="absolute top-[10px] left-[60px]">
              <p className="text-20 font-regular">{title}</p>
          </div>

          <div className="absolute top-[35px] left-[60px]">
              <p className="text-20 font-light">{description}</p>
          </div>
      </div>
  )
}
