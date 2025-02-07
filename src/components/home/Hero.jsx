import React from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import heroIcon from "../../assets/hero.jpg";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from '../../utils/animation';

export const Hero = () => {
    return (
        <div className={`relative h-auto md:h-[500px] text-white`}>
            <div className="px-[20px] h-full">
                <motion.img
                    src={heroIcon}
                    alt="hero-image"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    className="h-[500px] md:h-full w-full object-cover rounded-[20px]"
                />
            </div>

            <motion.div
                className="flex flex-col gap-[20px] items-center justify-center absolute top-0 h-full w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Animated Heading */}
                <motion.h2
                    className="font-bold text-[30px] md:text-[50px]"
                    variants={itemVariants}
                >
                    Your Desired Dish?
                </motion.h2>

                {/* Animated Input Box */}
                <motion.div
                    className="w-[70%] md:w-[90%] lg:w-[700px] relative"
                    variants={itemVariants}
                >
                    <GiKnifeFork className="absolute text-[30px] left-[10px] md:left-[20px] top-[30%] text-black" />
                    <input
                        type="text"
                        placeholder="Search recipes"
                        className="px-[50px] md:px-[80px] w-full font-[500] h-[70px] rounded-lg bg-red-50 text-red-500 outline-none"
                    />
                    <div className="absolute right-[5px] top-[3px] rounded-xl border-2 border-red-50 bg-red-500 flex items-center justify-center p-4 cursor-pointer transition-all duration-500 ease-in-out hover:border-red-500 hover:bg-white hover:text-red-500">
                        <IoSearch className="text-[30px]" />
                    </div>
                </motion.div>

                {/* Animated Subtitle */}
                <motion.p
                    className="w-[80%] text-center md:w-auto text-[12px] md:text-[18px] font-[500]"
                    variants={itemVariants}
                >
                    Search any recipe eg: Desserts, Fried chickens, Donuts, Toast etc...
                </motion.p>
            </motion.div>
        </div>
    );
};
