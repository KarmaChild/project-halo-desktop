import Image from "next/image";
import React from "react";

interface ImageCropWindowProps {
    image: File | null
    onExit: () => void
}

export const ImageCropWindow:React.FC<ImageCropWindowProps> = ({image, onExit}) => {
    return (
        <div className="relative w-[510px] h-[405px] bg-black rounded-[15px] flex justify-center items-center z-10">
            <div className="absolute top-[30px] w-[413px] h-[275px]">
                <Image
                    src={URL.createObjectURL(image!)}
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                />
            </div>
            <div className="absolute top-[342px] flex w-full justify-center items-center">
                <button
                    className="w-[145px] h-[35px] bg-white rounded-[50px] text-purple font-regular text-16
                                        hover-bg-grey transition duration-300 mr-2"
                >
                    Save
                </button>
                <button
                    className="w-[145px] h-[35px] bg-white rounded-[50px] text-red font-regular text-16
                                        hover-bg-grey transition duration-300"
                    onClick={onExit}
                >
                    Exit
                </button>
            </div>
        </div>
    )
}
