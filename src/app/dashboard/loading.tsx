import React from "react";

const DashBoardLoading = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px]">
            {/* util bar */}
            <div className="absolute top-[20px] w-full flex justify-center">
                <div className="w-[510px] h-[75px]  bg-grey rounded-[20px] loading-animation"/>
            </div>
            {/* util bar */}

            {/* Nav bar */}
            <div className="absolute top-[120px] w-full flex justify-center">
                <div className=" w-[300px] h-[30px] bg-grey rounded-[10px] loading-animation"/>
            </div>
            {/* Nav bar */}

            {/* Profile Header*/}
            <div className="absolute top-[188px] w-full flex justify-center">
                <div className="absolute top-[0px]">
                    <div className=" w-[150px] h-[150px] bg-grey rounded-full loading-animation"/>
                </div>
                <div className="absolute top-[160px] w-full flex justify-center">
                    <div className=" w-[90px] h-[15px] bg-grey rounded-[15px] loading-animation"/>
                </div>
                {/* Profile Header*/}

                {/* Main Area*/}
                <div className="absolute top-[200px] w-full flex justify-center">
                    <div className=" w-[430px] h-[60px] rounded-[15px] bg-grey loading-animation"/>
                </div>
                <div className="absolute top-[295px] w-full flex justify-center">
                    <div className=" w-[430px] h-[60px] rounded-[15px] bg-grey loading-animation"/>
                </div>
                <div className="absolute top-[390px] w-full flex justify-center">
                    <div className=" w-[430px] h-[60px] rounded-[15px] bg-grey loading-animation"/>
                </div>
                <div className="absolute top-[485px] w-full flex justify-center">
                    <div className=" w-[430px] h-[115px] rounded-[15px] bg-grey loading-animation"/>
                </div>
                {/* Main Area*/}
            </div>
        </div>
    )
}

export default DashBoardLoading
