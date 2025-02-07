import React from 'react'
import { Hero } from '../components/home/Hero'
import { Tab } from '../components/Tab/Tabs'
import { homeTabData } from '../utils/variables'
import { RecipeCard } from '../components/recipe/RecipeCard'
import { ReceipeCollection } from '../components/recipe/ReceipeCollection'



const Home = () => {

  return (
    <section className='pt-[120px] h-screen flex flex-col gap-[20px]'>
        <Hero />
        <div className='px-[5%] md:px-[10%] flex flex-col gap-[20px]'>
            <Tab data={homeTabData} />
            <ReceipeCollection count={10} isLoader={false} isShowMore={true} />
        </div>
    </section>
  )
}

export default Home