import React, { useState } from 'react'
// import logo from '../pics/logo-light.png';
import { FaStarOfLife, FaBars } from "react-icons/fa6";




function Navbar() {

  const [toggleMenu, setToggleMenu] = useState('hidden')

  const MenuOnClick = () => {
    if (toggleMenu === "hidden") {
      setToggleMenu('')
    }
    else {
      setToggleMenu('hidden')
    }
  }


  return (
    <div className="absolute z-10 w-full h-auto bg-transparent">
      <div className="container flex bg-transparent justify-between sm:justify-around items-center py-3">
        <img src="./pics/logo-light.png" alt="" className=" h-auto w-auto" />
        <ul className="hidden sm:flex justify-center items-center gap-3 ">
          <NavbarElement text="Home" />
          <NavbarElement text="Menu" />
          <NavbarElement text="Gallery" />
          <NavbarElement text="Contact Us" />

        </ul>
        <div className="sm:hidden border-3 border-zinc-700 p-2 rounded-xl">
          <FaBars className=" " onClick={MenuOnClick} />
          <div className={`${toggleMenu} h-[50vh] w-screen absolute left-0 top-28  bg-gray-500 `}></div>
        </div>



      </div>
    </div>
  )
}

const NavbarElement = ({ text }) => (
  <div className="sidebar-icon group">
    <p className="font-bold text-2xl">{text}</p>
  </div>
);



export default Navbar