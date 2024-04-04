import React, { useState } from "react"
import Image from "next/image"
import Draggable from "react-draggable"


interface LinkPreviewProps {
    title: string
    url: string
}
export const LinkPreview:React.FC<LinkPreviewProps> = ({ title, url }) => {

    return (
        <Draggable
            handle=".handle"
            axis="y"
            bounds="parent"
        >
            <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5">
                <div className="handle">
                    <div className="absolute top-[24px] left-[15px] cursor-move">
                        <Image src="/icons/grip.svg"
                               width={28}
                               height={28}
                               alt="&#8599"
                               draggable={false}
                        />
                    </div>
                </div>

                <div className="absolute top-[10px] left-[60px]">
                    <p className="text-20 font-regular">{title}</p>
                </div>

                <div className="absolute top-[35px] left-[60px]">
                    <p className="text-20 font-light">{url}</p>
                </div>
            </div>
        </Draggable>
    )
}
