import React from 'react'
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="flex w-screen flex-wrap justify-around items-center gap-6 mx-auto py-10 sm:px-20 px-10 bg-black">
          <div className="text-white text-center sm:w-1/5 flex justify-center flex-col">
            <img src="./pics/logo-light.png" alt="" className="w-[40vw]  sm:h-[8vh] sm:w-auto mx-auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

            <p className="my-3">Address</p>
            <p className="my-3">Address</p>
            <p className="my-3">Address</p>

          </div>
          <div className="sm:w-1/5 text-center ">
            <p className="text-xl font-bold text-white my-4">RECENT POST</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
          </div>
          <div className="sm:w-1/5 text-center ">
            <p className="text-xl font-bold text-white my-4">RECENT POST</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
            <p className="text-lg text-white my-2 border-b ">Chicken Wings</p>
          </div>

        </div>
        <div className="flex justify-center gap-6 py-10 border-t-2 border-dashed mx-10 sm:mx-52">
          <FaInstagram className=" hover:scale-125 transition-transform duration-150 ease-linear" color='white' size='2em' />
          <FaLinkedin className="transform hover:scale-125 transition-transform duration-150 ease-linear" color='white' size='2em' />
          <FaSquareFacebook className="transform hover:scale-125 transition-transform duration-150 ease-linear" color='white' size='2em' />
        </div>
      </div>
    </>
  )
}

export default Footer