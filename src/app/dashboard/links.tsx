import React from "react";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import Image from "next/image";


interface LinkPreviewProps {
    title: string
    link: string
}

const LinkPreview:React.FC<LinkPreviewProps> = ({ title, link }) => {
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


export const Links = () => {
    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    <DefaultButton text={"Add a link"}/>
                </div>
                {/* Add link button*/}

                {/* Link previews*/}
                <div className="absolute top-[75px] w-full flex flex-col items-center justify-center">
                    <LinkPreview title={"My Instagram"} link={"https://www.instagram.com/tall.cody"}/>
                    <LinkPreview title={"My Facebook"} link={"https://www.instagram.com/tall.cody"}/>
                    <LinkPreview title={"My Tiktok"} link={"https://www.instagram.com/tall.cody"}/>
                </div>
                {/* Link previews*/}



            </div>
        </div>
    )
}
