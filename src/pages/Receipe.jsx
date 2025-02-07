import React from 'react'
import { FilterPanel } from '../components/filter/FilterPanel'
import {Collection } from '../components/recipe/Collection'

const Receipe = () => {
  return (
    <section className='pt-[100px] flex overflow-hidden h-[100vh] w-screen'>
        <FilterPanel />
        <Collection title={"All Recipes"} />
    </section>
  )
}

export default Receipe