'use client'
import Image from "next/image"
import React, {useState} from "react"
import {addLink} from "@/api/add-link"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"

interface AddLinkFormProps {
    username: string
    onClose: () => void
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const AddLinkForm: React.FC<AddLinkFormProps> = ({ username, onClose }) => {
    const [title, setTitle] = useState<string>('')
    const [URL, setURL] = useState<string>('')
    const [saveState, setSaveState] =
        useState< SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)

    const handleAddlink = async () => {
        try {
            setSaveState(SAVE_STATES.LOADING)
            await addLink(username, title, URL)
            setSaveState(SAVE_STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setSaveState(SAVE_STATES.ERROR)
        } finally {

        }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.href = '/dashboard?index=2'
    }

    return (
      <div className="w-[430px] h-[200px] bg-grey rounded-[15px]">
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
          <div className="absolute top-[15px] left-[95px]">
              <div className="absolute top-0">
                  <p className="text-16 font-extralight">Title</p>
                  <input className="w-[315px] h-[40px] rounded-[15px] left-0 font-light pl-2"
                         placeholder="e.g. Check out my Instagram"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                  />
              </div>
              <div className="absolute top-[65px]">
                  <p className="text-16 font-extralight">URL</p>
                  <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                         placeholder="e.g. https://www.instagram.com/tall.cody"
                         value={URL}
                         onChange={(e) => setURL(e.target.value)}
                  />
              </div>
              <div className="absolute flex top-[139px] left-[85px]">
                  <button className="w-[145px] h-[35px] bg-black rounded-[50px] text-white font-regular text-16" onClick={handleAddlink}>Save</button>
              </div>
          </div>
      </div>
  )
}
