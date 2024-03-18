'use client'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import React from "react";

const One = () => {
    return (
        <div className="">
            <p className="font-bold text-48">Make a password</p>
            <p className="absolute top-[60px] font-x-light text-16">Choose a strong password with at least 8 characters.</p>
            <div className="absolute top-[90px]">
                <TextEntryField inputType={TextEntryFieldType.Password} fieldLength={TextEntryFieldType.Default}/>
            </div>
            <div className="absolute top-[180px] left-[85px]">
                <DefaultButton text={'Continue'}
                               disabled={false}
                />
            </div>
        </div>
    )
}
export default One
