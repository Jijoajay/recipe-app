import React from 'react'
import { IoFilter } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { isDarkMode, toggleFilter } from '../../redux/reducer/uiSlice';

export const FilterIcon = ({isLapView=true}) => {
    
    const dispatch = useDispatch()
    const isDark = useSelector(isDarkMode)

    const handleFilterClick = ()=>{
        if(!isLapView){
            dispatch(toggleFilter())
        }
    }

  return (
    <div 
        onClick={handleFilterClick}
        className={`flex items-center transition-all duration-500 ease-in-out ${!isLapView && isDark ? "bg-red-50 p-2 rounded-lg text-black gap-[10px] font-[600] text-[16px] cursor-pointer xl:opacity-0 xl:invisible" : !isLapView && !isDark ? "gap-[10px] font-[500] text-[16px] bg-gray-50 text-black p-2 cursor-pointer xl:opacity-0 xl:invisible" : "gap-[20px] text-[20px] "}`}
    >
        <IoFilter />
        <p>Filters</p>
    </div>
  )
}
