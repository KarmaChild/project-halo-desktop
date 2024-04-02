import React, {useState} from "react"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {AddLinkForm} from "@/app/dashboard/links/addLinkForm"
import {LinkPreview} from "@/app/dashboard/links/linkPreivew"

interface LinksProps {
    username: string
    links: { title: string, url: string }[]
}

export const Links:React.FC<LinksProps> = ({username, links}) => {
    const [showForm, setShowForm] = useState(false)

    const handleButtonClick = () => {
        setShowForm(true)
    }

    const handleFormCLose = () => {
        setShowForm(false)
    }

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    {showForm ? (
                        <AddLinkForm username={username} onClose={handleFormCLose}/>
                    ) : (
                        <DefaultButton text={"Add a link"} onClick={handleButtonClick} />
                    )}
                </div>
                {/* Add link button*/}

                {/* Link previews*/}
                <div className={`absolute top-[${showForm ? 220 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    {links && links.length > 0 && links.map((link, index) => (
                        <LinkPreview key={index} title={link.title} link={link.url}/>
                    ))}
                </div>
                {/* Link previews*/}
            </div>
        </div>
    )
}
