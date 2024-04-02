import React, {useState} from "react";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import {ServicePreview} from "@/app/dashboard/services/servicePreview";
import {AddServiceForm} from "@/app/dashboard/services/addServiceForm";

interface ServicesProps {
    username: string
    services: { serviceName: string, description: string, price: number }[]
}

export const Services:React.FC<ServicesProps> = ({username, services}) => {
    const [showForm, setShowForm] = useState(false)

    const handleButtonClick = () => {
        setShowForm(true)
    }

    const handleFormCLose = () => {
        setShowForm(false)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    {showForm ? (
                        <AddServiceForm username={username} onClose={handleFormCLose}/>
                    ) : (
                        <DefaultButton text={"Add a new Service"} onClick={handleButtonClick}/>
                    )}
                </div>
                {/* Add link button*/}

                {/* Services previews*/}
                <div
                    className={`absolute top-[${showForm ? 280 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    {services && services.length > 0 && services.map((service, index) => (
                        <ServicePreview
                            key={index}
                            serviceName={service.serviceName}
                            description={service.description}
                            price={service.price}
                        />
                    ))}
                </div>
                {/* Link previews*/}

            </div>
        </div>
    )
}
