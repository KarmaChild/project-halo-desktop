import Image from "next/image"
import React, {ChangeEvent, ReactEventHandler, useState} from "react";
import ReactCrop, {centerCrop, Crop} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {makeAspectCrop} from "react-image-crop";

interface ImageCropWindowProps {
    image: File | null
    onExit: () => void
}

export const ImageCropWindow:React.FC<ImageCropWindowProps> = ({image, onExit}) => {
    const ASPECT_RATIO = 1
    const MIN_WIDTH = 30
    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        width: 30,
        height: 35,
        x: 25,
        y: 25
    })

    const onImageLoad = (e: any) => {
        const {width, height} = e.currentTarget
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: MIN_WIDTH,
            },
            ASPECT_RATIO,
            width,
            height
        )
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(crop)
    }


    return (
        <div className="relative w-[510px] h-[405px] bg-black rounded-[15px] flex justify-center items-center z-10">
            <div className="absolute top-[30px] w-[413px] h-[275px]">
                <ReactCrop crop={crop}
                           onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                           circularCrop={true}
                           keepSelection={true}
                           aspect={ASPECT_RATIO}
                           minWidth={MIN_WIDTH}
                >
                    <img
                        src={URL.createObjectURL(image!)}
                        alt="image"
                    />
                </ReactCrop>
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
