import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isDarkMode } from "../../redux/reducer/uiSlice";
import { useNavigate } from "react-router";
import { useCommon } from "../../hooks/useCommon";

export const Tab = ({data, style, isBgHover=true, isHome=false, value}) => {
  
  const isDark = useSelector(isDarkMode)
  const navigate = useNavigate()
  const {path} = useCommon()

  const [tab, setTab] = useState(path);

  const handleChangeTab = (item) => {
    if(isHome){
      navigate(item)
    }
    setTab(item);
  };

  return (
    <div className="flex gap-[10px] overflow-x-scroll md:overflow-hidden w-full">
      {data.map((item) => (
        <div
          key={item.title}
          style={{...style}}
          onClick={() => handleChangeTab(item.path)}
          className={`relative min-w-[80px] md:flex-1 flex items-center justify-center ${isDark ? "bg-black" : "bg-white"} cursor-pointer transition-all duration-500 ease-in-out h-[50px] rounded-lg ${isBgHover && "hover:bg-red-50" } hover:text-red-500 ${
            tab === item.path ? "text-red-500 font-[600] after:w-full" : ""
          } after:content-[''] after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-500 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2`}
        >
          <p className={`font-[500] text-[18px]`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
