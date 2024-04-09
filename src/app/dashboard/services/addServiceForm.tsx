'use client'
import Image from "next/image"
import React, {useState} from "react"
import {addLink} from "@/api/add-link";
import {addService} from "@/api/add-service";
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog";

interface AddServiceFormProps {
    username: string
    onClose: () => void
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const AddServiceForm: React.FC<AddServiceFormProps> = ({username,  onClose }) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [saveState, setSaveState] =
        useState< SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)

    const handleAddService = async () => {
        try {
            setSaveState(SAVE_STATES.LOADING)
            await addService(username, title, description, price)
            setSaveState(SAVE_STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setSaveState(SAVE_STATES.ERROR)
        } finally {

        }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.reload()
    }
    return (
        <div className="w-[430px] h-[267px] bg-grey rounded-[15px]">
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
            <div className="absolute top-[10px] left-[425px]" onClick={onClose}>
                <Image src="/icons/x.png" alt="X" width={25} height={25} className="cursor-pointer"/>
            </div>
            <div className="absolute top-[15px] left-[95px] border-2 border-amber-300">
                <div className="absolute top-0">
                    <p className="text-16 font-extralight">Name</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] left-0 font-light pl-2"
                           placeholder="e.g. Full Acrylic Set"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="absolute top-[65px]">
                    <p className="text-16 font-extralight">Description</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                           placeholder="e.g. No extra charge for design or length!"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="absolute top-[130px]">
                    <p className="text-16 font-extralight">Price</p>
                    <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                           placeholder="e.g. 50"
                           value={price}
                           onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                    />
                </div>
                <div className="absolute flex top-[205px] left-[85px]">
                    <button className="w-[145px] h-[35px] bg-black rounded-[50px] text-white font-regular text-16"
                            onClick={handleAddService}>Save
                    </button>
                </div>
            </div>
        </div>
    )
}
