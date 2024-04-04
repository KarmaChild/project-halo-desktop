import React, {useState} from "react"
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import {AddLinkForm} from "@/app/dashboard/links/addLinkForm"
import {LinkPreview} from "@/app/dashboard/links/linkPreivew"
import {closestCenter, DndContext} from "@dnd-kit/core"
import {arrayMove, SortableContext, useSortable, verticalListSortingStrategy} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"

interface LinksProps {
    username: string
    links: { id: string, title: string, url: string }[]
}

interface SortableLinkProps {
    link: { id: string, title: string, url: string }
}

const SortableLink:React.FC<SortableLinkProps> = ({link}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: link.id
    })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} >
          <LinkPreview id={link.id} title={link.title} url={link.url}/>
      </div>
  )
}

export const Links:React.FC<LinksProps> = ({username, links}) => {
    const [showForm, setShowForm] = useState(false)
    const [_links, setLinks] = useState(links)

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

    return (
        <div className="relative">
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
                                <SortableLink link={link}/>
                            ))}
                        </SortableContext>
                    </DndContext>

                </div>
                {/* Link previews*/}
            </div>
        </div>
    )
}
