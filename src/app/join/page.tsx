'use client'
import React, {useEffect, useState} from 'react'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField"
import {useRouter, useSearchParams} from 'next/navigation'
import {DefaultButton} from "@/app/components/Button/DefaultButton"
import algoliasearch from "algoliasearch"
import {isValidEmail} from "@/app/utils/ValidEmailRegex/ValidEmailRegex";

const Join = () => {
    const searchParams = useSearchParams()
    const usernameParam = (searchParams.get('username') === 'undefined') ? '' : searchParams.get('username') ?? ''
    const [username, setUsername] = useState<string>(usernameParam)
    const [email, setEmail] = useState<string>('')
    const [resultExists, setResultExists] = useState<boolean>(false)

    const algoliaClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!)
    const algoliaIndex = algoliaClient.initIndex('dev_rmc-barbers')

    const router = useRouter()

    useEffect(() => {
        const searchIndex = async () => {
            try {
                const { hits } = await algoliaIndex.search(username!)
                setResultExists(hits.length > 0)
                console.log('search')
            } catch (error) {
                console.error('Error searching index:', error)
            }
        }

        if (username) {
            searchIndex()
        } else {
            setResultExists(false)
        }
    }, [username])

    const handleContinueClick = () => {
        router.push(`/join/onboard/`)
    }


    return (
        <div className="relative">
            <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[435px] h-[435px]">
                <p className="text-48 font-bold text-center">Join appname</p>
                <div className="flex flex-col absolute top-[75px]">
                    {/* Username check*/}
                    <div className="">
                        <div
                            className={`bg-grey absolute flex justify-start items-center h-[65px] w-[430px] rounded-[20px] pl-6 
                            ${resultExists ? "border-red-alert" : ""}`}>
                            <p className="font-light text-30 ml-0 ">appna.me/</p>
                            <input type="text"
                                   className="h-[60px] w-full border-none bg-transparent outline-none text-30 placeholder-opacity-50 font-[300]"
                                   placeholder="username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Username check*/}
                    <div className="absolute top-[65px] w-[200px] left-5 mb-[10px]">
                        {resultExists ?
                            <p className="font-light text-sm text-red">This username already exists</p> : <></>}
                    </div>
                    <div className="absolute top-[75px] mt-[10px]">
                        <TextEntryField
                            inputType={TextEntryFieldType.Text}
                            placeholderText={'Email'}
                            fieldLength={TextEntryFieldType.Default}
                            alert={email.length > 0 && !isValidEmail(email)}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="absolute top-[150px] w-[200px] left-5 mb-[10px]">
                        {email.length > 0 && !isValidEmail(email) ?
                            <p className="font-light text-sm text-red">This email doesn't look right</p> : <></>}
                    </div>
                    <div className="absolute top-[170px] left-[85px]">
                        <DefaultButton text={'Continue'}
                                       disabled={username.length == 0 || resultExists || !isValidEmail(email)}
                                       onClick={handleContinueClick}
                        />
                    </div>
                    {/* line separator*/}
                    <div className="absolute top-[220px]">
                        <div className="flex items-center">
                            <hr className="flex-1 bg-black h-[2px] w-[186px]"/>
                            <p className="mx-4 font-light text-30">or</p>
                            <hr className="flex-1 bg-black h-[2px] w-[186px]"/>
                        </div>
                    </div>
                    {/* line separator*/}
                    <div className="absolute top-[280px]">
                        <button className="bg-white border-2 border-black border-opacity-50 w-[430px] h-[45px] rounded-[50px] font-light text-23">
                            Log in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
