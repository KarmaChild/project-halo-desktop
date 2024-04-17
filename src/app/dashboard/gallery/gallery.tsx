import {DefaultButton} from "@/app/components/Button/DefaultButton"
import React, {ChangeEvent, useState} from "react"
import Image from "next/image";


export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [showSelectedImage, setShowSelectedImage] = useState<boolean>(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        if (file) {
            setSelectedImage(file);
            setShowSelectedImage(true);
        }
        console.log("Selected file:", file)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[1115px]">
                {/* Hide gallery button*/}
                <div className="absolute top-[-10px] w-full flex justify-center">
                    <p className="font-light text-20 mr-2.5">Hide Gallery page</p>
                    <input type="checkbox" className="scale-125"/>
                </div>
                {/* Hide gallery button*/}

                {/* Add picture button*/}
                <div className="absolute top-[25px] w-full flex justify-center">
                    { showSelectedImage ? (
                        <div className="flex justify-center items-center w-[430px] h-[240px] bg-grey rounded-[15px]">
                            <div className="absolute top-[15px] w-[160px] h-[160px]">
                                <Image
                                    src={URL.createObjectURL(selectedImage!)}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="image"
                                />
                            </div>
                            <div className="absolute top-[190px] flex w-full justify-center items-center">
                                <input type="file"
                                       ref={fileInputRef}
                                       style={{display: "none"}}
                                       accept="image/*"
                                       onChange={handleFileChange}
                                />
                                <button
                                    className="w-[100px] h-[35px] bg-black rounded-[50px] text-white font-light text-16
                                        hover-bg-black transition duration-300 mr-1"
                                    onClick={handleButtonClick}
                                >
                                    replace
                                </button>
                                <button
                                    className="w-[100px] h-[35px] bg-black rounded-[50px] text-white font-light text-16
                                        hover-bg-black transition duration-300">
                                    upload
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <input type="file"
                                   ref={fileInputRef}
                                   style={{display: "none"}}
                                   accept="image/*"
                                   onChange={handleFileChange}
                            />
                            <DefaultButton text={"Add a Picture"} onClick={handleButtonClick}/>
                        </div>
                    )}
                </div>
                {/* Add picture button*/}
            </div>
        </div>
    )
}
