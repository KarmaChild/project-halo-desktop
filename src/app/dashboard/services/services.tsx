import React, {useEffect, useState} from "react"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {ServicePreview} from "@/app/dashboard/services/servicePreview"
import {AddServiceForm} from "@/app/dashboard/services/addServiceForm"
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import {isEqual} from "lodash"
import {updateServices} from "@/api/update-services"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"
import {closestCenter, DndContext} from "@dnd-kit/core"

interface ServicesProps {
    username: string
    services: { id: string, title: string, description: string, price: number }[]
}

interface SortableServiceProps {
    service: { id: string, title: string, description: string, price: number }
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

const SortableService:React.FC<SortableServiceProps> = ({service}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: service.id
    })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} >
            <ServicePreview key={service.id} id={service.id} title={service.title} description={service.description} price={service.price}/>
        </div>
    )
}

export const Services:React.FC<ServicesProps> = ({username, services}) => {
    const [showForm, setShowForm] = useState(false)
    const [_services, setServices] = useState(services)
    const [changeSet, setChangeSet] = useState(true)
    const [saveState, setSaveState] =
        useState< SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)

    useEffect(() => {
        const hasChanges = !isEqual(_services, services)
        setChangeSet(hasChanges)
    }, [_services])

    const handleButtonClick = () => {
        setShowForm(true)
    }

    const handleFormCLose = () => {
        setShowForm(false)
    }

    const onDragEnd = (event: any) => {
        const {active, over} = event
        if (active.id === over.id) return

        setServices(_services => {
            const oldIndex = _services.findIndex((service) => service.id === active.id)
            const newIndex = _services.findIndex((service) => service.id === over.id)
            return arrayMove(_services, oldIndex, newIndex)
        })
    }

    const handleSave = async () => {
        try {
            setSaveState(SAVE_STATES.LOADING)
            await updateServices(username, _services)
            setSaveState(SAVE_STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setSaveState(SAVE_STATES.ERROR)
        }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.reload()
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

                {/* Add link button*/}
                <div className="absolute top-[0px] w-full flex justify-center">
                    {showForm ? (
                        <AddServiceForm username={username} onClose={handleFormCLose}/>
                    ) : (
                        <DefaultButton text={"Add a new Service"} onClick={handleButtonClick}/>
                    )}
                </div>
                {/* Add link button*/}

                {/* Services previews*/}
                <div
                    className={`absolute top-[${showForm ? 280 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                        <SortableContext items={_services} strategy={verticalListSortingStrategy}>
                            {_services && _services.length > 0 && _services.map((service) => (
                                <SortableService key={service.id} service={service}/>
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
                {/* Link previews*/}
                {
                    changeSet ? (
                        <div className="absolute top-[430px] w-full flex justify-center">
                            <DefaultButton text={"Save"}
                                           disabled={!changeSet}
                                           onClick={handleSave}
                            />
                        </div>
                    ) : (<></>)
                }
            </div>
        </div>
    )
}
