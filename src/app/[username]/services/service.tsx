import React from "react";

interface ServiceProps {
    serviceName: string
    description: string
    price: number
}

export const Service:React.FC<ServiceProps> = ({ serviceName, description, price}) => {

    return (
        <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5 cursor-pointer hover-bg-grey">
            <div className="absolute top-[13px] left-[15px] ">
                <p className="text-20 font-regular">{serviceName}</p>
            </div>
            <div className="absolute top-[40px] left-[15px] ">
                <p className="text-16 font-light">{description}</p>
            </div>
            <div className="absolute top-[15px] left-[355px]">
                <p className="text-20 font-regular">{price === 0 ? "Free" : `$${price}`}</p>
            </div>
        </div>
    )
}
