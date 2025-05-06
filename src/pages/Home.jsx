import React from 'react'

import HeroSection from '../components/Hero Section/HeroSection'
import FeatureCarousel from '../components/Feature Carousel/FeatureCarousel'
import Search from '../components/Search/Search'


function Home() {
  return (
    <div>
      <Search/>
      <HeroSection/>
      <FeatureCarousel/>
    </div>
  )
}

export default Home