import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsHovered, setHover } from '../../redux/reducer/favouriteSlice';
import { cardVariants } from '../../utils/animation';

export const RecipeCard = ({ index }) => {
    const dispatch = useDispatch();
    const isHover = useSelector(selectIsHovered);

    const handleHoverCard = () => {
        dispatch(setHover());
    };


    return (
        <motion.div
            onMouseEnter={handleHoverCard}
            onMouseLeave={handleHoverCard}
            className="p-2 flex flex-col gap-[10px] w-[150px] md:w-[250px] relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index} 
        >
            <div
                className={`absolute top-[20px] transition-all duration-500 ease-in-out ${
                    isHover
                        ? "right-[30px] opacity-0 lg:opacity-100  invisible lg:visible  z-[1]"
                        : "z-[-1] right-[-10px] opacity-0 invisible "
                }`}
            >
                <FcLike size={25} className="cursor-pointer z-[10]" />
            </div>
            <img
                src="https://images.slurrp.com/prod/recipe_images/transcribe/desert/Puli-pithe.webp"
                alt="food"
                className="rounded-[25px] size-full"
            />
            <div className="">
                <p className="font-[500] text-[16px] md:text-[18px]">
                    Chicken nuggets
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-[8px] items-center">
                        <CiClock2 size={15} />
                        <p> 40 mins</p>
                    </div>
                    <FcLike size={25} className=" lg:hidden cursor-pointer" />
                </div>
            </div>
        </motion.div>
    );
};