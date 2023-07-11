import React from 'react'
import { FaBeer, FaPlay,FaPowerOff, FaPlus  } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';


function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col bg-gray-600 text-white shadow-lg w-36">
        
        <SideBarIcon icon={<FaBeer size="40"/>}/>
        <SideBarIcon icon={<FaPlay size="40"/>}/>
        <SideBarIcon icon={<FaPlus size="40"/>}/>
        <SideBarIcon icon={<FaPowerOff size="40"/>}/>
    </div>
  )
}




export default Navbar