import React from 'react'
import { ReceipeCollection } from './ReceipeCollection'
import { FilterIcon } from '../filter/FilterIcon'
import { FilterPanel } from '../filter/FilterPanel'

export const Collection = ({title, isFullPage=false, isLoader=true}) => {
  return (
    <section className={`flex flex-col gap-[20px] overflow-x-hidden  overflow-y-scroll ${isFullPage ? "w-screen pt-[120px] px-[5%] md:px-[10%] h-[100vh]" : "w-full  px-[5%] md:px-[10%] xl:px-[20px] xl:w-[80%] p-[20px]"}`}>
        <div className='flex items-center justify-between'>
          <p className='font-[500] text-[22px]'>{title}</p>
          {
            !isFullPage &&  <FilterIcon isLapView={false} />
          }
        </div>
        <ReceipeCollection isLoader={isLoader} />
    </section>
  )
}
