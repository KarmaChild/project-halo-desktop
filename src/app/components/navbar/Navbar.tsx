import {NavbarJoinButton} from "@/app/components/navbar/NavbarJoinButton"
import Image from "next/image";

export const Navbar = () => {
    return (
        <div className="z-10 bg-black absolute top-10 flex justify-center items-center h-[75px] w-[510px] rounded-[20px]">
            <div className="flex items-center justify-between ">
                <div
                    className="bg-white absolute flex justify-center items-center h-[40px] w-[140px] rounded-[10px]
                    transition duration-300 hover-bg-grey cursor-pointer"
                >
                    <p className="text-23 font-regular mr-1">Join</p>
                    <Image src="/icons/CTA_Arrow.png"
                           width={13}
                           height={13}
                           alt="&#8599;"/>
                </div>
                <p className="text-white text-23 font-regular relative ml-36">Login</p>
            </div>
        </div>
    )
}
