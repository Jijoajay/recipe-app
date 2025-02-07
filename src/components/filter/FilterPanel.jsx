import React, { useState } from 'react'
import { Input } from '../fields/Input';
import { filterPanelData } from '../../utils/variables';
import { RxLapTimer } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../fields/Button';
import { FilterIcon } from './FilterIcon';
import { IoClose } from "react-icons/io5";
import { useFilterPanel } from '../../hooks/useFilterPanel';

export const FilterPanel = ({isRight=false}) => {

    const {isDark, isOpenFilter, isSelectedFilter, params, handleCloseFilter, handleFilterClick, handleResetFilter, handleSelectTab} = useFilterPanel()
   
  return (
    <>
        {isOpenFilter && isRight && (
            <div
            className="fixed inset-0 z-[51] opacity-50 bg-black"
            onClick={handleCloseFilter}
            ></div>
        )}
        <aside 
        className={`flex flex-col justify-between w-[20%] p-[20px]   border-gray-200 absolute xl:relative transition-all duration-500 ease-in-out overflow-y-scroll
        ${isOpenFilter && isRight ? "right-0 top-0 z-[55] min-h-[100vh] bg-white translate-x-0 w-[300px] border-l" : !isOpenFilter && isRight ? "right-0 translate-x-[1200px]" : "left-0 translate-x-[-500px] xl:translate-x-[0px] min-h-[90vh] border-r"}`}
        >
            <div className='flex flex-col gap-[30px]'>
                <div className='flex justify-between items-center'>
                    <FilterIcon />
                    <IoClose className='size-[25px] visible opacity-100 xl:opacity-0 xl:invisible transition-all duration-500 ease-in-out hover:text-red-500 cursor-pointer' onClick={handleCloseFilter} />
                </div>
                <Input label={"Search"} name={"search"}  />
                <div>
                    {
                        filterPanelData.map((item)=>(
                            <div className={`flex flex-col gap-[10px]`} key={item.title}>
                                <div className={`flex cursor-pointer justify-between items-center px-1 rounded-lg py-2 ${isSelectedFilter(item.title) && isDark ?  "bg-gray-200 text-black" : ""}`} onClick={()=>handleSelectTab(item.title)}>
                                    <RxLapTimer size={20} />
                                    <p>{item.title}</p>
                                    <IoIosArrowDown size={20} className={`  transition-all duration-500 ease-in-out ${isSelectedFilter(item.title) ? "rotate-[-180deg]" : "" }`} />
                                </div>
                                <div className={`flex flex-wrap items-center justify-center pb-[10px] w-full gap-[10px] transition-all  duration-500 ease-in-out ${ isSelectedFilter(item.title) ? "max-h-[300px]" : "max-h-0"}`}>
                                    {
                                        item.options && item.options.map((option)=>(
                                                <p 
                                                    key={option.title}
                                                    onClick={()=>handleFilterClick(item.name, option)}
                                                    className={`py-1 cursor-pointer px-2 text-[16px] border rounded-lg transition-all  duration-500 ease-in-out  
                                                    ${params?.[item?.name]?.includes(option.value)  ? "bg-red-50 text-red-500 border-red-500"  :"border-gray-200 "}
                                                    ${isSelectedFilter(item.title) ? "opacity-100 visible" : "opacity-0 invisible" } 
                                                    `} 
                                                >{option.title}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex gap-[20px] justify-end'>
                <Button title={"Clear"} handleClick={handleResetFilter} isGray={true} />
                <Button title={"Apply"} handleClick={()=>{}} style={{width:"100px", display:"flex", alignItems:"center", justifyContent:"center"}} />
            </div>
        </aside>
    </>
  )
}
