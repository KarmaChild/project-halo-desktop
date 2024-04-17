import {DefaultButton} from "@/app/components/Button/DefaultButton"
import React, {ChangeEvent, useEffect, useState} from "react"
import Image from "next/image"
import {updateGallery} from "@/api/update-gallery"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"

interface GalleryProps {
    username: string
    hidden: boolean
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const Gallery:React.FC<GalleryProps> = ({username, hidden}) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [showSelectedImage, setShowSelectedImage] = useState<boolean>(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const [hide, setHide] = useState<boolean>(hidden)
    const [changeSet, setChangeSet] = useState(true)
    const [saveState, setSaveState] =
        useState< SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)

    useEffect(() => {
        const hasChanges = hide !== hidden
        setChangeSet(hasChanges)
    }, [hide])

    const handleButtonClick = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        if (file) {
            setSelectedImage(file)
            setShowSelectedImage(true)
        }
        console.log("Selected file:", file)
    }

    const handleSave = async () => {
        try {
            setSaveState(SAVE_STATES.LOADING)
            await updateGallery(username, hide)
            setSaveState(SAVE_STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setSaveState(SAVE_STATES.ERROR)
        }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.href = '/dashboard?index=1'
    }

    return (
        <div className="relative">
            {saveState === SAVE_STATES.LOADING && (
                <PopupDialog
                    dialogText=""
                    dialogType={DialogType.Loading}
                    isOpen={true}
                    onClose={handleCloseDialog}
                />
            )}
            {saveState === SAVE_STATES.SUCCESS && (
                <PopupDialog
                    dialogText="Saved changes"
                    dialogType={DialogType.Success}
                    isOpen={true}
                    onClose={handleCloseDialog}
                />
            )}
            {saveState === SAVE_STATES.ERROR && (
                <PopupDialog
                    dialogText="An Error Occured, Please try again later"
                    dialogType={DialogType.Error}
                    isOpen={true}
                    onClose={handleCloseDialog}
                />
            )}
            <div className="absolute w-[510px] h-[1115px]">
                {/* Hide gallery button*/}
                <div className="absolute top-[-10px] w-full flex justify-center">
                    <p className="font-light text-20 mr-2.5">Hide Gallery page</p>
                    <input type="checkbox"
                           className="scale-125 accent-[#7C5FF8]"
                           checked={hide}
                           onChange={() => setHide(!hide)}/>
                </div>
                {/* Hide gallery button*/}

                {/* Add picture button*/}
                <div className="absolute top-[25px] w-full flex justify-center">
                    {showSelectedImage ? (
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
                {
                    changeSet && (
                        <div className="absolute top-[430px] w-full flex justify-center">
                            <DefaultButton text={"Save"}
                                           disabled={!changeSet}
                                           onClick={handleSave}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
