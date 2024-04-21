import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeMarquee from '../Components/HomeMarquee'
import Impact from '../Components/Impact'
import HomeWorld from '../Components/HomeWorld'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeMarquee/>
      <Impact/>
      <HomeWorld/>
    </div>
  )
}
