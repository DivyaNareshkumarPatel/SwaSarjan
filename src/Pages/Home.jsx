import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeMarquee from '../Components/HomeMarquee'
import Impact from '../Components/Impact'
import HomeWorld from '../Components/HomeWorld'
import Sponsers from '../Components/Sponsers'
import HomeTestimonials from '../Components/HomeTestimonials'
import Volunteer from '../Components/Volunteer'
import Projects from '../Components/Projects'
import HomeEvents from '../Components/HomeEvents'
import FAQs from '../Components/FAQs'
import VideoGallery from '../Components/VideoGallery'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <HomeMarquee/>
      <Impact/>
      <Projects/>
      <HomeWorld/>
      <Sponsers/>
      <HomeEvents/>
      <HomeTestimonials/>
      <FAQs/>
      <Volunteer/>
      <VideoGallery/>
      <Footer/>
    </div>
  )
}
