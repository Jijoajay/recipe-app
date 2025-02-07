import React from 'react';
import { GiCook } from "react-icons/gi";
import { LuSunMoon } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { isDarkMode, toggleDarkMode } from '../../redux/reducer/uiSlice';
import { Tab } from '../Tab/Tabs';
import { navTab } from '../../utils/variables';
import { Button } from '../fields/Button';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { navbarVariants, navbarItemVariants, navbarContainerVariants } from '../../utils/animation';

export const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const navigate = useNavigate();

  return (
    <motion.nav
      className={`h-[100px] border-b border-[#eee] fixed top-0 transition-all duration-500 ease-in-out z-[50] w-screen overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="px-[5%] md:px-[10%] flex items-center justify-between h-full">
        {/* Logo and Title */}
        <motion.div
          className="flex gap-[10px] items-center"
          variants={navbarContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={navbarItemVariants}>
            <GiCook className="text-red-500 text-[60px]" />
          </motion.div>
          <motion.h1 className="font-extrabold text-[20px]" variants={navbarItemVariants}>
            RECEIPE APP
          </motion.h1>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="transition-all duration-500 ease-in-out opacity-0 invisible lg:visible lg:opacity-100 w-0 lg:w-[400px]"
          variants={navbarItemVariants}
        >
          <Tab data={navTab} style={{ height: "100px" }} isBgHover={false} isHome={true} />
        </motion.div>

        {/* Theme Toggle and Button */}
        <motion.div
          className="flex gap-[20px] items-center"
          variants={navbarContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={navbarItemVariants}>
            <LuSunMoon
              className={`text-[30px] cursor-pointer transition-all duration-300 ease-in-out ${
                isDark ? "text-red-500" : "text-black"
              }`}
              onClick={handleToggle}
            />
          </motion.div>
          <motion.div
            className="transition-all duration-500 ease-in-out opacity-0 invisible lg:visible lg:opacity-100 w-0 lg:w-[200px]"
            variants={navbarItemVariants}
          >
            <Button
              title={"Saved Recipes"}
              handleClick={() => {
                navigate("/saved-recipes");
              }}
              isFav={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
