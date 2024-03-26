import React, {useState} from "react"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {AddLinkForm} from "@/app/dashboard/links/addLinkForm"
import {LinkPreview} from "@/app/dashboard/links/linkPreivew"


export const Links = () => {
    const [showForm, setShowForm] = useState(false)

    const handleButtonClick = () => {
        setShowForm(true)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    {showForm ? (
                        // Render form here
                        <AddLinkForm/>
                    ) : (
                        // Render button here
                        <DefaultButton text={"Add a link"} onClick={handleButtonClick} />
                    )}
                </div>
                {/* Add link button*/}

                {/* Link previews*/}
                <div className={`absolute top-[${showForm ? 220 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    <LinkPreview title={"My Instagram"} link={"https://www.instagram.com/tall.cody"}/>
                    <LinkPreview title={"My Facebook"} link={"https://www.instagram.com/tall.cody"}/>
                    <LinkPreview title={"My Tiktok"} link={"https://www.instagram.com/tall.cody"}/>
                </div>
                {/* Link previews*/}
            </div>
        </div>
    )
}
