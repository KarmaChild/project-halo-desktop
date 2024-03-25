import React from "react"
import Image from "next/image"

interface LinkPreviewProps {
    title: string
    link: string
}

export const LinkPreview:React.FC<LinkPreviewProps> = ({ title, link }) => {
    return (
        <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5">
            <div className="absolute top-[24px] left-[15px]">
                <Image src="/icons/grip.png"
                       width={28}
                       height={28}
                       alt="&#8599"/>
            </div>

            <div className="absolute top-[10px] left-[60px]">
                <p className="text-20 font-regular">{title}</p>
            </div>

            <div className="absolute top-[35px] left-[60px]">
                <p className="text-20 font-light">{link}</p>
            </div>
        </div>
    )
}