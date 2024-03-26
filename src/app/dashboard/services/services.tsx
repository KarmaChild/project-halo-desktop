import React, {useState} from "react";
import {AddLinkForm} from "@/app/dashboard/links/addLinkForm";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import {ServicePreview} from "@/app/dashboard/services/servicePreview";


export const Services = () => {
    const [showForm, setShowForm] = useState(false)

    const handleButtonClick = () => {
        setShowForm(true)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    {showForm ? (
                        // Render form here
                        <AddLinkForm/>
                    ) : (
                        // Render button here
                        <DefaultButton text={"Add a new Service"} onClick={handleButtonClick}/>
                    )}
                </div>
                {/* Add link button*/}

                {/* Link previews*/}
                <div
                    className={`absolute top-[${showForm ? 220 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    <ServicePreview serviceName={"Full Acrylic Set"}
                                    description={"No extra charge for design or length!"}
                                    price={50}
                    />
                    <ServicePreview serviceName={"Acrylic Set Fill"}
                                    description={"No extra charge for design or length!"}
                                    price={15}
                    />
                    <ServicePreview serviceName={"All decals free!"}
                                    description={"No extra charge for design or length!"}
                                    price={"Free"}
                    />
                </div>
                {/* Link previews*/}

            </div>
        </div>
    )
}