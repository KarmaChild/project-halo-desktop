import React from "react"
import {Link} from "@/app/[username]/links/link";

interface LinksProps {
    links: { title: string, url: string }[]
}

export const Links:React.FC<LinksProps> = ({links}) => {

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Links*/}
                <div className="absolute w-full flex flex-col items-center justify-center">
                    {links && links.length > 0 && links.map((link, index) => (
                        <Link key={index} title={link.title} url={link.url} />
                    ))}
                </div>
                {/* Links*/}

            </div>
        </div>
    )
}
