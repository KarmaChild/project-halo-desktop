'use client'
import Image from "next/image"
import React, {useState} from "react"

interface AddServiceFormProps {
    // title: string
    // URL: string
    onClose: () => void
}

export const AddServiceForm: React.FC<AddServiceFormProps> = ({ onClose }) => {
    const [serviceName, setServiceName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    return (
        <div className="w-[430px] h-[267px] bg-grey rounded-[15px]">
            <div className="absolute top-[10px] left-[425px]" onClick={onClose}>
                <Image src="/icons/x.png" alt="X" width={25} height={25} className="cursor-pointer"/>
            </div>
            <div className="absolute top-[15px] left-[95px] border-2 border-amber-300">
                <div className="absolute top-0">
                    <p className="text-16 font-extralight">Name</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] left-0 font-light pl-2"
                           placeholder="e.g. Full Acrylic Set"
                           value={serviceName}
                           onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className="absolute top-[65px]">
                    <p className="text-16 font-extralight">Description</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                           placeholder="e.g. No extra charge for design or length!"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="absolute top-[130px]">
                    <p className="text-16 font-extralight">Price</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                           placeholder="e.g. 50"
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="absolute flex top-[205px] left-[85px]">
                    <button className="w-[145px] h-[35px] bg-black rounded-[50px] text-white font-regular text-16"
                            onClick={onClose}>Save
                    </button>
                </div>
            </div>
        </div>
    )
}
