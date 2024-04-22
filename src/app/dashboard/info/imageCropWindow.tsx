import Image from "next/image"
import React, {useState} from "react"
import ReactCrop, {Crop} from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import {makeAspectCrop} from "react-image-crop"

interface ImageCropWindowProps {
    image: File | null
    onExit: () => void
    onCropComplete?: (croppedImage: Blob) => void
}

export const ImageCropWindow:React.FC<ImageCropWindowProps> = ({image, onExit, onCropComplete}) => {
    const ASPECT_RATIO = 1
    const MIN_DIMENSION = 150
    const [crop, setCrop] = useState<Crop>()

    const onImageLoad = (e: any) => {
        const { width, height } = e.currentTarget
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100

        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        )
        setCrop(crop)
    }

    const getCroppedImg = async (image: File, pixelCrop: Crop) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!image || !ctx) {
            console.error("Error: Invalid image or canvas context")
            return
        }

        const imageSrc = URL.createObjectURL(image)
        const img = new Image()

        img.onload = () => {
            canvas.width = pixelCrop.width
            canvas.height = pixelCrop.height

            ctx.drawImage(
                img,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height
            )

            canvas.toBlob((blob) => {
                if (blob) {
                    if (onCropComplete) {
                        onCropComplete(blob)
                    }
                }
            }, "image/jpeg")
        }

        img.src = imageSrc
    }

    const handleSave = () => {
        //getCroppedImg(image!, crop!).then(r =>)
    }



    return (
        <div className="relative w-[510px] h-[405px] bg-black rounded-[15px] flex justify-center items-center z-10">
            <div className="absolute top-[30px] w-[413px] h-[275px]">
                <ReactCrop crop={crop}
                           onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                           circularCrop={true}
                           keepSelection={true}
                           aspect={ASPECT_RATIO}
                           minWidth={MIN_DIMENSION}
                >
                    <img
                        src={URL.createObjectURL(image!)}
                        alt="image"
                        style={{ maxHeight: "70vh" }}
                        onChange={onImageLoad}
                        draggable={false}
                    />
                </ReactCrop>
            </div>
            <div className="absolute top-[342px] flex w-full justify-center items-center">
                <button
                    className="w-[145px] h-[35px] bg-white rounded-[50px] text-purple font-regular text-16
                                        hover-bg-grey transition duration-300 mr-2"
                    onClick={handleSave}
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
