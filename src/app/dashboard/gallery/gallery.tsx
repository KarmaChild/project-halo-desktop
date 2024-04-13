import {DefaultButton} from "@/app/components/Button/DefaultButton"
import React, {ChangeEvent} from "react"


export const Gallery = () => {
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        console.log("Selected file:", file)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[1115px]">
                {/* Add picture button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    <input type="file"
                           ref={fileInputRef}
                           style={{ display: "none" }}
                           onChange={handleFileChange}
                    />
                    <DefaultButton text={"Add a Picture"} onClick={handleButtonClick}/>
                </div>
                {/* Add picture button*/}
            </div>
        </div>
    )
}