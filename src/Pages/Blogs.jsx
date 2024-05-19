import React from 'react'
import NavBar from '../Components/Navbar'
import BlogsBanner from '../Components/BlogsBanner'
import BlogsCardCollections from '../Components/BlogsCardCollections'
import Footer from '../Components/Footer';
import BlogSlider from '../Components/BlogSlider';

export default function Blogs() {
  return (
    <div>
      <NavBar/>
      <BlogsBanner/>
      <BlogsCardCollections/>
      <BlogSlider/>
      <Footer/>
    </div>
  )
}
