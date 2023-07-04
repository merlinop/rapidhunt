"use client"

// import { DiAndroid } from "react-icons/di"
import Image from "next/image"
import Spidey from "../public/images/spidey.jpg"

const Headers = () => {
  const Dater = new Date()
  const formatDater = `${Dater.getHours()}:${Dater.getMinutes()}`
  return (
    <div className="w-full h-[90px] bg-[#060224] rounded-tr-2xl rounded-tl-2xl border-b-2 border-[#2596db] flex items-center justify-between px-3 lg:px-5 py-2">
      {/* Left */}
      <div className="flex items-center gap-2 ">
        {/* <DiAndroid size={20} color="red" /> */}
        {/* <h1></h1> */}
        <p className="tracking-wider text-sm lg:text-lg font-bold">RapidHunt</p>
      </div>
      {/* Center */}
      <div>
        <h1 className="text-lg tracking-wider font-bold text-[#2596db] ">
          {formatDater}
        </h1>
      </div>
      {/* Right */}
      <div className="flex items-center gap-2">
        <Image
          alt="image"
          src={Spidey}
          className="w-[30px] lg:w-[70px] rounded-[100%] "
        />
        <p className="textGray">John Smith</p>
      </div>
    </div>
  )
}

export default Headers
