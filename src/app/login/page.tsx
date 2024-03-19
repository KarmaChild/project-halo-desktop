'use client'
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField";
import {isValidEmail} from "@/app/utils/ValidEmailRegex/ValidEmailRegex";
import {DefaultButton} from "@/app/components/Button/DefaultButton";
import React, {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
      <div className="relative">
          <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[435px] h-[435px]">
              <p className="text-48 font-bold text-center">Login</p>
              <div className="flex flex-col absolute top-[75px]">
                  <div className="absolute top-[10px]">
                      <TextEntryField
                          inputType={TextEntryFieldType.Text}
                          placeholderText={'Email or Username'}
                          fieldLength={TextEntryFieldType.Default}
                          alert={email.length > 0 && !isValidEmail(email)}
                          onChange={setEmail}
                      />
                  </div>
                  <div className="absolute top-[75px] w-[200px] left-5 mb-[10px]">
                      {email.length > 0 && !isValidEmail(email) ?
                          <p className="font-light text-sm text-red">This email doesn't look right</p> : <></>}
                  </div>
                  <div className="absolute top-[92px]">
                      <TextEntryField
                          inputType={TextEntryFieldType.Password}
                          placeholderText={'Password'}
                          fieldLength={TextEntryFieldType.Default}
                          onChange={setPassword}
                      />
                  </div>
                  <div className="absolute top-[167px] left-[85px]">
                      <DefaultButton text={'Continue'}
                                     disabled={password.length < 8 || !isValidEmail(email)}

                      />
                  </div>
                  {/* line separator*/}
                  <div className="absolute top-[215px]">
                      <div className="flex items-center">
                          <hr className="flex-1 bg-black h-[2px] w-[186px]"/>
                          <p className="mx-4 font-light text-30">or</p>
                          <hr className="flex-1 bg-black h-[2px] w-[186px]"/>
                      </div>
                  </div>
                  {/* line separator*/}
                  <div className="absolute top-[260px]">
                      <button
                          className="bg-white border-2 border-black border-opacity-50 transition duration-300 hover-bg-grey w-[430px] h-[45px] rounded-[50px] font-light text-23">
                          Log in with Google
                      </button>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Login
