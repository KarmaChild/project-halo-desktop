import React, {useEffect, useState} from "react"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {AddLinkForm} from "@/app/dashboard/links/addLinkForm"
import {LinkPreview} from "@/app/dashboard/links/linkPreivew"
import {closestCenter, DndContext} from "@dnd-kit/core"
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import { isEqual } from 'lodash'
import {updateLinks} from "@/api/update-links"
import {DialogType, PopupDialog} from "@/app/components/PopupDialog/PopupDialog"

interface LinksProps {
    username: string
    links: { id: string, title: string, url: string }[]
}

interface SortableLinkProps {
    link: { id: string, title: string, url: string }
}

enum SAVE_STATES {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

const SortableLink:React.FC<SortableLinkProps> = ({link}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } =
        useSortable({
            id: link.id
    })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <div ref={setNodeRef}>
            <div ref={setNodeRef} style={style}>
                <LinkPreview
                    key={link.id}
                    id={link.id}
                    title={link.title}
                    url={link.url}
                    dragAttributes={{...attributes}}
                    dragListeners={{...listeners}}
                />
            </div>
        </div>
    )
}

export const Links: React.FC<LinksProps> = ({username, links}) => {
    const [showForm, setShowForm] = useState(false)
    const [_links, setLinks] = useState(links)
    const [changeSet, setChangeSet] = useState(true)
    const [saveState, setSaveState] = useState<SAVE_STATES.LOADING | SAVE_STATES.SUCCESS | SAVE_STATES.ERROR | null>(null)

    useEffect(() => {
        const hasChanges = !isEqual(_links, links)
        setChangeSet(hasChanges)
    }, [_links])

    const handleButtonClick = () => {
        setShowForm(true)
    }

    const handleFormCLose = () => {
        setShowForm(false)
    }

    const onDragEnd = (event: any) => {
        const {active, over} = event
        if (active.id === over.id) return

        setLinks(_links => {
            const oldIndex = _links.findIndex((link) => link.id === active.id)
            const newIndex = _links.findIndex((link) => link.id === over.id)
            return arrayMove(_links, oldIndex, newIndex)
        })
    }

    const handleSave = async () => {
        try {
            setSaveState(SAVE_STATES.LOADING)
            await updateLinks(username, _links)
            setSaveState(SAVE_STATES.SUCCESS)
        } catch (err: any) {
            console.log(err)
            setSaveState(SAVE_STATES.ERROR)
        }
    }

    const handleCloseDialog = () => {
        setSaveState(null)
        window.location.href = '/dashboard?index=2'
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
                        <AddLinkForm username={username} onClose={handleFormCLose}/>
                    ) : (
                        <DefaultButton text={"Add a link"} onClick={handleButtonClick}/>
                    )}
                </div>
                {/* Add link button*/}

                {/* Link previews*/}
                <div className={`absolute top-[${showForm ? 220 : 75}px]  w-full flex flex-col items-center justify-center`}>
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                        <SortableContext items={_links} strategy={verticalListSortingStrategy}>
                            {_links && _links.length > 0 && _links.map((link) => (
                                <SortableLink key={link.id} link={link}/>
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
