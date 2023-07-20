import React, { useState } from 'react'
// import logo from '../pics/logo-light.png';
import { FaStarOfLife, FaBars } from "react-icons/fa6";




function Navbar() {

  const [toggleMenu, setToggleMenu] = useState('hidden')
  const [buttonBg, setButtonBg] = useState('border-black bg-black text-white')

  const MenuOnClick = () => {
    if (toggleMenu === "hidden") {
      setToggleMenu('')
      setButtonBg('bg-white border-white text-black')
    }
    else {
      setToggleMenu('hidden')
      setButtonBg(' border-black bg-black text-white')
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
        <div className={`sm:hidden border-2  ${buttonBg} p-2 rounded-xl `}>
          <FaBars size='1.8em' className='' onClick={MenuOnClick} />
          <div className={`${toggleMenu} h-[80vh] w-screen absolute left-0 
          top-28 flex justify-start items-start ps-5 flex-col bg-white `}>
            <NavbarElement text="Home"/>
            <NavbarElement text="Menu" />
            <NavbarElement text="Gallery" />
            <NavbarElement text="Contact Us" />
          </div>
        </div>



      </div>
    </div>
  )
}

const NavbarElement = ({ text }) => (
  <div className="sidebar-icon group my-10 sm:my-0">
    <p className="font-bold text-2xl">{text}</p>
  </div>
);



export default Navbar