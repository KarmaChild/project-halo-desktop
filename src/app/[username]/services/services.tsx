import React from "react"
import {Service} from "@/app/[username]/services/service";

interface ServicesProps {
    services: { serviceName: string, description: string, price: number }[]
}

export const Services:React.FC<ServicesProps> = ({services}) => {

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Services */}
                <div className="absolute w-full flex flex-col items-center justify-center">
                    {services.map((service, index) => (
                        <Service
                            key={index}
                            serviceName={service.serviceName}
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
