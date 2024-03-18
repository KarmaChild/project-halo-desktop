'use client'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import React from "react";

const Two = () => {
    return (
        <div className="">
            <p className="font-bold text-48 w-[500px]">Tell us about yourself</p>
            <p className="absolute top-[60px] font-x-light text-16">Enter you name</p>
            <div className="absolute top-[90px]">
                <TextEntryField inputType={TextEntryFieldType.Text} fieldLength={TextEntryFieldType.Default}/>
            </div>
            <p className="absolute top-[160px] font-x-light text-16">Enter your Location</p>
            <div className="absolute top-[185px]">
                <TextEntryField inputType={TextEntryFieldType.Text} fieldLength={TextEntryFieldType.Default}/>
            </div>
            <div className="absolute top-[270px] left-[85px]">
                <DefaultButton text={'Continue'}
                               disabled={false}
                />
            </div>
        </div>
    )
}
export default Two
