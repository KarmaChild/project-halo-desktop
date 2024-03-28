import React from "react"
import {Service} from "@/app/[username]/services/service";


export const Services = () => {

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Services */}
                <div className="absolute w-full flex flex-col items-center justify-center">
                    <Service serviceName={"Full Acrylic Set"}
                                    description={"No extra charge for design or length!"}
                                    price={50}
                    />
                    <Service serviceName={"Acrylic Set Fill"}
                                    description={"No extra charge for design or length!"}
                                    price={15}
                    />
                    <Service serviceName={"All decals free!"}
                                    description={"No extra charge for design or length!"}
                                    price={"Free"}
                    />
                </div>
                {/* Services */}

            </div>
        </div>
    )
}
