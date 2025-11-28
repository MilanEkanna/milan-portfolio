import React from 'react'

import HeroSection from './HeroSection'


import CardSection from './CardSection'

import SkillsSection from './SkillsSection'
import SkillsProgress from './SkillsProgress'

const Home = () => {
  return (
    <div className=''>
        <HeroSection/>
        {/* <SkillsSection/> */}
        <SkillsSection/>
        <SkillsProgress/>
        <CardSection/>
        
        
       
    </div>
  )
}

export default Home