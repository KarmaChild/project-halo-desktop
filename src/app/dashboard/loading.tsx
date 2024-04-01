import React from "react";

const Loading = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px]">

            {/* Profile Header*/}
            <div className="absolute top-[25px] w-full flex justify-center">
                <div className="absolute top-[0px]">
                    <div className=" w-[150px] h-[150px] bg-grey rounded-full loading-animation"/>
                </div>
                <div className="absolute top-[160px] w-full flex justify-center">
                    <div className=" w-[90px] h-[15px] bg-grey rounded-[15px] loading-animation"/>
                </div>
                <div className="absolute top-[190px] w-full flex justify-center">
                    <div className=" w-[100px] h-[25px] bg-grey rounded-[15px] loading-animation"/>
                </div>
                <div className="absolute top-[225px] w-full flex justify-center">
                    <div className=" w-[100px] h-[20px] bg-grey rounded-[15px] loading-animation"/>
                </div>
                <div className="absolute top-[255px] w-3/4 flex justify-center">
                    <div className=" w-[100px] h-[25px] bg-grey rounded-[10px] loading-animation"/>
                </div>
                {/* Profile Header*/}

                {/* Nav bar */}
                <div className="absolute top-[310px] w-full flex justify-center">
                    <div className=" w-[300px] h-[30px] bg-grey rounded-[10px] loading-animation"/>
                </div>
                {/* Nav bar */}

                {/* Main Area*/}
                <div className="absolute top-[370px] left-0">
                    <div className=" w-[510px] h-[1000px] bg-grey loading-animation"/>
                </div>
                {/* Main Area*/}

            </div>

        </div>
    )
}

export default Loading
