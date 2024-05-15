import React, {useRef, useState} from "react"
import ReactCrop, {Crop, PixelCrop} from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import {makeAspectCrop} from "react-image-crop"
import {useDebounceEffect} from "./useDebounceEffect"
import {canvasPreview} from "@/app/dashboard/info/canvasPreview";

interface ImageCropWindowProps {
    image: File | null
    onExit: () => void
}

export const ImageCropWindow:React.FC<ImageCropWindowProps> = ({image, onExit}) => {
    const ASPECT_RATIO = 1
    const MIN_DIMENSION = 150
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const imgRef = useRef<HTMLImageElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const blobUrlRef = useRef('')
    const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)

    const onImageLoad = (e: any) => {
        const { width, height } = e.currentTarget
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100
        const crop = makeAspectCrop(
            {
                unit: "px",
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        )
        setCrop(crop)
    }

    const handleSave = async () => {
        const canvas = canvasRef.current
        const img = imgRef.current
        if (!img || !canvas || !completedCrop) {
            throw new Error('Crop canvas does not exist')
        }

        const scaleX = img.naturalWidth / img.width
        const scaleY = img.naturalHeight / img.height

        const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
        )
        const ctx = offscreen.getContext('2d')
        if (!ctx) {
            throw new Error('No 2d context')
        }

        ctx.drawImage(
            canvas,
            0,
            0,
            canvas.width,
            canvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
        )
        const blob = await offscreen.convertToBlob({
            type: 'image/png',
        })

        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current)
        }
        blobUrlRef.current = URL.createObjectURL(blob)

        if (hiddenAnchorRef.current) {
            hiddenAnchorRef.current.href = blobUrlRef.current
            hiddenAnchorRef.current.click()
        }

    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                canvasRef.current
            ) {
                await canvasPreview(
                    imgRef.current,
                    canvasRef.current,
                    completedCrop,
                )
            }
        },
        100,
        [completedCrop]
    )



    return (
        <div className="relative w-[510px] h-[405px] bg-black rounded-[15px] flex justify-center items-center z-10">
            <div className="absolute top-[30px] w-[413px] h-[275px]">
                <ReactCrop crop={crop}
                           onChange={(pixelCrop, percentCrop) => setCrop(pixelCrop)}
                           onComplete={(c) => setCompletedCrop(c)}
                           circularCrop={true}
                           keepSelection={true}
                           aspect={ASPECT_RATIO}
                           minWidth={MIN_DIMENSION}
                >
                    <img
                        ref={imgRef}
                        src={URL.createObjectURL(image!)}
                        alt="image"
                        style={{maxHeight: "70vh"}}
                        onChange={onImageLoad}
                        draggable={false}
                    />
                </ReactCrop>
                <canvas
                    ref={canvasRef}
                    style={{display: "none"}}
                />
                <a
                    href="#hidden"
                    ref={hiddenAnchorRef}
                    download
                    style={{
                        position: 'absolute',
                        top: '-200vh',
                        visibility: 'hidden',
                    }}
                >
                    Hidden download
                </a>
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
