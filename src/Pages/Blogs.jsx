import React from 'react'
import NavBar from '../Components/Navbar'
import BlogsBanner from '../Components/BlogsBanner'
import BlogsCardCollections from '../Components/BlogsCardCollections'
import Footer from '../Components/Footer';

export default function Blogs() {
  return (
    <div>
      <NavBar/>
      <BlogsBanner/>
      <BlogsCardCollections/>
      <Footer/>
    </div>
  )
}
