'use client'
import React from 'react'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField";

const Join = () => {
    return (
        <div className="relative">
            <p className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-48 text-bold ">Join appname</p>
            <TextEntryField
                inputType={TextEntryFieldType.Text}
                placeholderText={''}
                fieldLength={TextEntryFieldType.Default}
            />
        </div>
    )
}

export default Join
