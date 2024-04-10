import React, {useState} from "react"
import Image from "next/image"
import {SyntheticListenerMap} from "@dnd-kit/core/dist/hooks/utilities";
import {DraggableAttributes} from "@dnd-kit/core";
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog";


interface LinkPreviewProps {
    id: string,
    title: string
    url: string
    dragAttributes?: DraggableAttributes
    dragListeners?: SyntheticListenerMap | undefined
}

enum STATES {
    DELETE = 'delete',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const LinkPreview:React.FC<LinkPreviewProps> = ({ title, url, dragAttributes, dragListeners }) => {
    const [editMode, setEditMode] = useState(false)
    const [_title, setTitle] = useState(title)
    const [_url, setUrl] = useState(url)
    const [state, setState] = useState<STATES | null>(null)

    const handleEditModeOn = () => {
        console.log('editModeOn')
        setEditMode(true)
    }

    const handleEditModeOff = () => {
        console.log('editModeOff')
        setEditMode(false)
    }

    const handleCloseDialog = () => {
        setState(null)
        // window.location.reload()
    }

    const handleDelete = () => {
        console.log('delete')
        setState(STATES.DELETE)
    }

    return (
        <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5 ">
            {state === STATES.DELETE && (
                    <PopupDialog
                        dialogText="Are you sure you want to delete?"
                        dialogType={DialogType.Question}
                        isOpen={true}
                        onClose={handleCloseDialog}
                        onYes={handleCloseDialog}
                        onNo={handleCloseDialog}
                    />
            )}
            <div className="handle" {...dragAttributes} {...dragListeners}>
                <div className="absolute top-[24px] left-[15px] cursor-grab">
                    <Image src="/icons/grip.svg"
                           width={28}
                           height={28}
                           alt="&#8599"
                           draggable={false}
                    />
                </div>
            </div>

            {
                !editMode ? (
                    <>
                        <div className="absolute top-[10px] right-[20px] flex ">
                            <Image src="/icons/pencil.svg"
                                       width={17}
                                       height={17}
                                       alt="&#8599"
                                       draggable={false}
                                       className="mr-1 cursor-pointer"
                                       onClick={handleEditModeOn}
                            />
                            <Image src="/icons/trash.svg"
                                   width={18}
                                   height={18}
                                   alt="&#8599"
                                   draggable={false}
                                   className="cursor-pointer"
                                   onClick={handleDelete}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-[10px] right-[20px] flex">
                            <Image src="/icons/check.svg"
                                   width={17}
                                   height={17}
                                   alt="&#8599"
                                   draggable={false}
                                   className="mr-1 cursor-pointer"
                            />
                            <Image src="/icons/x.svg"
                                   width={18}
                                   height={18}
                                   alt="&#8599"
                                   draggable={false}
                                   className="cursor-pointer"
                                   onClick={handleEditModeOff}
                            />
                        </div>
                    </>
                )
            }

            {
                editMode ? (
                    <>
                        <div className="absolute top-[10px] left-[60px]">
                            <input className="w-[180px] h-[23px] rounded-[5px] text-18 font-regular p-1"
                                   value={_title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="absolute top-[35px] left-[60px]">
                            <input className="w-[260px] h-[23px] rounded-[5px] text-18 font-regular p-1"
                                   value={_url}
                                   onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-[10px] left-[60px]">
                            <p className="text-20 font-regular">{title}</p>
                        </div>

                        <div className="absolute top-[35px] left-[60px]">
                            <p className="text-20 font-light">{url}</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}
