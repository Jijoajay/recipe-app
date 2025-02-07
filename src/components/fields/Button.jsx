import React from 'react'
import { IoIosSave } from "react-icons/io";
import { useSelector } from 'react-redux';
import { isDarkMode } from '../../redux/reducer/uiSlice';

export const Button = ({title, handleClick, style, isFav=false, isGray=false}) => {

    const isDark = useSelector(isDarkMode)
  return (
    <button 
    style={{...style}}
    onClick={handleClick}
    className={`px-2 cursor-pointer flex items-center gap-[10px] h-[40px] rounded-lg ${isGray ? "bg-transparent text-gray-500 hover:border-gray-500" : "bg-red-500 text-[#FFFFFF] hover:border-red-500 hover:text-red-500 hover:bg-[#FFFFFF]"}  border-2   transition-all duration-500 ease-initial   font-[600] ${isDark ? "border-black" : "border-[#FFFFFF]"}`}
    >
        {
            isFav &&
            <IoIosSave size={20} />
        }
        {title}
    </button>

  )
}
