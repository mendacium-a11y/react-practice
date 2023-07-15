import React from 'react'

function Footer() {
  return (
    <div className="bg-black h-[30vh] flex justify-center items-center ">
        <div className="flex justify-center items-center gap-6 sm:container mx-auto border-2 border-white px-20">
            <div className="border-2 border-white w-1/4 h-[20vh]">
            <img src="./pics/logo-light.png" alt="" className=" h-auto w-32" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            </div>
            <div className="border-2 border-white w-1/4 h-[20vh]"></div>
            <div className="border-2 border-white w-1/4 h-[20vh]"></div>
            <div className="border-2 border-white w-1/4 h-[20vh]"></div>
        </div>
    </div>
  )
}

export default Footer