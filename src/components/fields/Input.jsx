import React, { useState } from 'react'

export const Input = ({label, value, onChange, name}) => {

    const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='relative h-[40px]'>
        <label className={`absolute transition-all duration-500 text-[14px] bg-white ease-in-out text-red-500 ${isFocused ? "left-[10px] top-[-10px] opacity-100 visible" : "left-[20px] top-[20%] opacity-0 invisible"}`}>{label}</label>
        <input 
            type="text" 
            name={"search"}
            onChange={onChange}
            value={value || ""}  
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder='Search Receipes'
            className={`h-[40px] border-[1.5px] rounded-sm border-gray-200 focus:outline-red-500 w-full px-[20px] ${isFocused ? "placeholder-transparent" : ""}`}
        />
    </div>
  )
}
