import React from "react"
import {Service} from "@/app/[username]/services/service";

interface ServicesProps {
    services: { title: string, description: string, price: number }[]
}

export const Services:React.FC<ServicesProps> = ({services}) => {

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Services */}
                <div className="absolute w-full flex flex-col items-center justify-center">
                    {services && services.length > 0 && services.map((service, index) => (
                        <Service
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                        />
                    ))}
                </div>
                {/* Services */}

            </div>
        </div>
    )
}
