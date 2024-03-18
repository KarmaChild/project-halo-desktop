import Image from "next/image";
import Two from "@/app/join/onboard/Two";


const OnBoard = () => {

    return (
        <div className="relative">
            <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[435px] h-[435px]">
                <div>
                    <div className="absolute top-[5px]">
                        <Image src="/icons/back_arrow.png"
                               width={13}
                               height={13}
                               alt="&#8599"/>
                    </div>
                    <p className="absolute top-0 left-[17px] font-medium text-20 text-purple">back</p>
                </div>
                <div className="absolute top-[35px]">
                    <Two/>
                </div>
            </div>
        </div>
    )
}

export default OnBoard
