import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeMarquee from '../Components/HomeMarquee'
import Impact from '../Components/Impact'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeMarquee/>
      <Impact/>
    </div>
  )
}
