import React from 'react'
// import { FaBeer, FaPlay,FaPowerOff, FaPlus  } from 'react-icons/fa';

function SideBarIcon({icon, text="tooltip"}) {
  return (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  )
}

export default SideBarIcon