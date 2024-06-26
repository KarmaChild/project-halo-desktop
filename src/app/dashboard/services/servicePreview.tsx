import React, {useState} from "react"
import Image from "next/image"
import {DraggableAttributes} from "@dnd-kit/core"
import {SyntheticListenerMap} from "@dnd-kit/core/dist/hooks/utilities"
import {editService} from "@/api/edit-service"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"
import {deleteService} from "@/api/delete-service"

interface ServicePreviewProps {
    id: string
    title: string
    description: string
    price: number
    dragAttributes?: DraggableAttributes
    dragListeners?: SyntheticListenerMap | undefined
}

enum STATES {
    DELETE = 'delete',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const ServicePreview:React.FC<ServicePreviewProps>  = ({ id, title, description, price, dragAttributes, dragListeners}) => {
    const [editMode, setEditMode] = useState(false)
    const [_title, setTitle] = useState(title)
    const [_description, setDescription] = useState(description)
    const [_price, setPrice] = useState(price)
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
        window.location.href = '/dashboard?index=3'
    }

    const handleDelete = async () => {
        try {
            setState(STATES.LOADING)
            await deleteService('johnydogz', id)
            setState(STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setState(STATES.ERROR)
        }
    }

    const handleSaveEdit = async () => {
        try {
            setState(STATES.LOADING)
            await editService('johnydogz', id, _title, _description, _price)
            setState(STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setState(STATES.ERROR)
        } finally {
            setEditMode(false)
        }
    }

    return (
      <div className="relative w-[430px] h-[75px] bg-grey rounded-[15px] mb-2.5">
          {state === STATES.DELETE && (
              <PopupDialog
                  dialogText="Are you sure you want to delete?"
                  dialogType={DialogType.Question}
                  isOpen={true}
                  onClose={() => setState(null)}
                  onYes={handleDelete}
                  onNo={() => setState(null)}
              />
          )}
          {state === STATES.SUCCESS && (
              <PopupDialog
                  dialogText="Saved changes"
                  dialogType={DialogType.Success}
                  isOpen={true}
                  onClose={handleCloseDialog}
              />
          )}
          {state === STATES.LOADING && (
              <PopupDialog
                  dialogText=""
                  dialogType={DialogType.Loading}
                  isOpen={true}
                  onClose={handleCloseDialog}
              />
          )}
          <div className="handle" {...dragAttributes} {...dragListeners}>
              <Image src="/icons/grip.svg"
                     width={28}
                     height={28}
                     alt="&#8599"
                     draggable={false}
                     className="absolute top-[24px] left-[15px] cursor-grab"
              />
          </div>

          {
              !editMode ? (
                  <>
                      <div className="absolute top-[14px] right-[20px] flex ">
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
                                 onClick={() => setState(STATES.DELETE)}
                          />
                      </div>
                  </>
              ) : (
                  <>
                      <div className="absolute top-[14px] right-[20px] flex">
                          <Image src="/icons/check.svg"
                                 width={17}
                                 height={17}
                                 alt="&#8599"
                                 draggable={false}
                                 className="mr-1 cursor-pointer"
                                 onClick={handleSaveEdit}
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
              !editMode ? (
                  <>
                      <div className="absolute top-[10px] left-[330px]">
                          <p className="text-20 font-regular">{price === 0 ? "Free" : `$${price}`}</p>
                      </div>

                      <div className="absolute top-[10px] left-[60px]">
                          <p className="text-20 font-regular">{title}</p>
                      </div>

                      <div className="absolute top-[35px] left-[60px]">
                          <p className="text-20 font-light">{description}</p>
                      </div>
                  </>
              ) : (
                  <>
                      <div className="absolute top-[10px] left-[310px]">
                          <input
                              className="w-[50px] h-[23px] rounded-[5px] text-18 font-regular p-1"
                              type="number"
                              min="0"
                              step="1"
                              value={_price}
                              onChange={(e) => setPrice(parseInt(e.target.value))}
                          />
                      </div>

                      <div className="absolute top-[10px] left-[60px]">
                          <input className="w-[180px] h-[23px] rounded-[5px] text-18 font-regular p-1"
                                 value={_title}
                                 onChange={(e) => setTitle(e.target.value)}
                          />
                      </div>

                      <div className="absolute top-[35px] left-[60px]">
                          <input className="w-[290px] h-[23px] rounded-[5px] text-18 font-regular p-1"
                                 value={_description}
                                 onChange={(e) => setDescription(e.target.value)}
                          />
                      </div>
                  </>
              )
          }
      </div>
    )
}
