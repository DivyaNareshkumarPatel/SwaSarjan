import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeMarquee from '../Components/HomeMarquee'
import Impact from '../Components/Impact'
import HomeWorld from '../Components/HomeWorld'
import HomeSponsers from '../Components/HomeSponsers'
import HomeTestimonials from '../Components/HomeTestimonials'
import Volunteer from '../Components/Volunteer'
import Projects from '../Components/Projects'
import Events from '../Components/Events'
import VideoGallery from '../Components/VideoGallery'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeMarquee/>
      <Impact/>
      <Projects/>
      <HomeWorld/>
      <HomeSponsers/>
      <Events/>
      <HomeTestimonials/>
      <Volunteer/>
      <VideoGallery/>
    </div>
  )
}
