'use client'
import React, {useEffect, useState} from 'react'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField"
import { useSearchParams } from 'next/navigation'
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import algoliasearch from "algoliasearch";

const Join = () => {
    const searchParams = useSearchParams()
    const usernameParam = searchParams.get('username')
    const [username, setUsername] = useState<string>(usernameParam ?? '')
    const [resultExists, setResultExists] = useState<boolean>(false);

    const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID!, process.env.ALGOLIA_API_KEY!);
    const algoliaIndex = algoliaClient.initIndex('dev_rmc-barbers');

    useEffect(() => {
        const searchIndex = async () => {
            try {
                const { hits } = await algoliaIndex.search(username!);
                setResultExists(hits.length > 0);
                console.log('search')
            } catch (error) {
                console.error('Error searching index:', error);
            }
        };

        if (username) {
            searchIndex();
        } else {
            setResultExists(false)
        }
    }, [username]);


    return (
        <div className="relative">
            <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[435px] h-[435px] border-2 border-amber-950">
                <p className="text-48 font-bold text-center">Join appname</p>
                <div className="flex flex-col absolute top-[75px]">
                    {/* Username check*/}
                    <div className="">
                        <div
                            className={`bg-grey absolute flex justify-start items-center h-[65px] w-[430px] rounded-[20px] pl-6 
                            ${resultExists ? "border-red-alert"  : ""}`}>
                            <p className="font-light text-30 ml-0 ">appna.me/</p>
                            <input type="text"
                                   className="h-[60px] w-full border-none bg-transparent outline-none text-30 placeholder-opacity-50 font-[300]"
                                   placeholder="username"
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="absolute top-[65px] w-[200px] left-5 mb-[10px]">
                        {resultExists ? <p className="font-light text-sm text-red">This username already exists</p> : <></>}
                    </div>
                    <div className="absolute top-[75px] mt-[10px]">
                        <TextEntryField
                            inputType={TextEntryFieldType.Text}
                            placeholderText={'Email'}
                            fieldLength={TextEntryFieldType.Default}
                        />
                    </div>
                    <div className=" absolute top-[160px] left-[85px]">
                        <DefaultButton text={'Continue'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
