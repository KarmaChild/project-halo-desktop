'use client'
import Image from "next/image"
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField"
import React, {ChangeEvent, useEffect, useRef, useState} from "react"
import {TextEntryFieldLarge} from "@/app/components/TextEntryField/TextEntryFieldLarge"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {updateInfo} from "@/api/update-info"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"
import {ImageCropWindow} from "@/app/dashboard/info/imageCropWindow";

interface InfoProps {
    username: string
    name: string
    location: string
    bio: string
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const Info:React.FC<InfoProps> = ({username, name, location, bio}) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [showSelectedImage, setShowSelectedImage] = useState<boolean>(false)
    const [_name, setName] = useState<string>(name)
    const [_location, setLocation] = useState<string>(location)
    const [_bio, setBio] = useState<string>(bio)
    const [changeSet, setChangeSet] = useState<boolean>(false)
    const [saveState, setSaveState] =
        useState< SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        const hasChanges = _name !== name || _location !== location || _bio !== bio
        setChangeSet(hasChanges)
    }, [_name, _location, _bio])


    const handleSave = async () => {
      try {
          setSaveState(SAVE_STATES.LOADING)
          await updateInfo(username, _name, _location, _bio)
          setSaveState(SAVE_STATES.SUCCESS)
      } catch (err: any) {
          console.log(err)
          setSaveState(SAVE_STATES.ERROR)
      }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.href = '/dashboard'
    }

    const handleChangeClick = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]

        if (file){
            setSelectedImage(file)
            setShowSelectedImage(true)
        }
    }

    const exitCropWindow = () => {
        setSelectedImage(null)
        setShowSelectedImage(false)
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
          <div className="absolute w-[510px] h-[613px]">

              {/* Profile pic*/}
              <div className="absolute top-[0px] w-full flex justify-center">
                  <Image src="/profile.jpg" width={150} height={150} alt='pic' className="rounded-full"/>
              </div>
              <div className="absolute top-[160px] w-full flex justify-center">
                  <input type="file"
                         ref={fileInputRef}
                         style={{display: "none"}}
                         accept="image/*"
                         onChange={handleFileChange}
                  />
                  <button className="text-16 font-light text-purple mr-3 cursor-pointer hover:underline"
                          onClick={handleChangeClick}
                  >Change</button>
                  <p className="text-16 font-light text-red cursor-pointer hover:underline">Remove</p>
              </div>
              {/* Profile pic*/}

              {/* Profile pic change crop window*/}
              {
                 showSelectedImage && (
                      <div className="absolute top-[0px] w-full flex justify-center">
                          <ImageCropWindow image={selectedImage} onExit={exitCropWindow}/>
                      </div>
                  )
              }
              {/* Profile pic change crop window*/}


              {/* Info fields*/}
              <div className="absolute top-[200px] w-full left-[37px]">
                  <p className="absolute top-[0px] font-light text-16">Username (permanent)</p>
                  <div className="absolute top-[25px]">
                  <TextEntryField inputType={TextEntryFieldType.Text}
                                      fieldLength={TextEntryFieldType.Default}
                                      value={username}
                                      disabled={true}
                      />
                  </div>

                  <p className="absolute top-[90px] font-light text-16">Name</p>
                  <div className="absolute top-[115px]">
                      <TextEntryField inputType={TextEntryFieldType.Text}
                                      fieldLength={TextEntryFieldType.Default}
                                      value={_name}
                                      onChange={setName}
                      />
                  </div>

                  <p className="absolute top-[180px] font-light text-16">Location</p>
                  <div className="absolute top-[205px]">
                      <TextEntryField inputType={TextEntryFieldType.Text}
                                      fieldLength={TextEntryFieldType.Default}
                                      value={_location}
                                      onChange={setLocation}
                      />
                  </div>

                  <p className="absolute top-[270px] font-light text-16">Bio</p>
                  <div className="absolute top-[295px]">
                      <TextEntryFieldLarge value={_bio}
                                           onChange={setBio}
                      />
                  </div>
                  {
                      changeSet ? (
                          <div className="absolute top-[430px] left-[-37px] w-full flex justify-center">
                              <DefaultButton text={"Save"}
                                             disabled={!changeSet}
                                             onClick={handleSave}
                              />
                          </div>
                      ) : (<></>)
                  }
              </div>
              {/* Info fields*/}
          </div>
      </div>
    )
}
