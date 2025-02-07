import React, { useEffect, useRef } from 'react'
import { RecipeCard } from './RecipeCard'
import { BiLoaderCircle } from "react-icons/bi";
import { Button } from '../fields/Button';
import { useNavigate } from 'react-router';

export const ReceipeCollection = ({isLoader, count=20, isShowMore}) => {

    const loadingRef = useRef();
    const naviagate = useNavigate()


    // intersection observer used to increase the count fo the data automatically when the user scrolls to the end 

    // useEffect(() => {
    //     if(isLoader){
    //         const observer = new IntersectionObserver(([entry]) => {
    //             setIsIntersecting(entry.isIntersecting);
    //         }, {
    //             root: null,
    //             rootMargin: "0px",
    //             threshold: 1
    //         });
    
    //         const ref = loadingRef.current;
    //         if (ref) observer.observe(ref);
    
    //         return () => {
    //             if (ref) observer.unobserve(ref);
    //         };
    //     }
    // }, []);

  return (
    <article className='flex flex-col gap-[10px]'>
        <div className='flex flex-wrap justify-center items-center gap-[10px]'>
            {
                Array(count).fill(0).map((_, index)=>(
                    <RecipeCard key={index} index={index} />
                ))
            }
        </div>
        {
            isLoader &&
            <div ref={loadingRef} className='flex flex-col gap-[10px] justify-center items-center pt-5'>
                <BiLoaderCircle className="text-red-500 animate-spin size-[30px]" />
                <p className='text-[16px] text-red-500 animate-pulse'>Loading More</p>
            </div>
        }
        {
            isShowMore &&
            <div className='flex items-center justify-center'>
                <Button title={"Show More"} handleClick={()=>{naviagate("/recipe-collection")}} />
            </div>
        }
    </article>
  )
}
