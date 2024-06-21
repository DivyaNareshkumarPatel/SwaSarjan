import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CommonBanner from '../Components/CommonBanner';
import GalleryImage from '../Components/GalleryImage';
import GallerySlickVideo from '../Components/GallerySlickVideo';
export default function Gallery() {
    return(
        <div>
            <NavBar/>
            <CommonBanner head="Our Gallery" line1="Know Our Work " line2="Through Documentry" />
            <GalleryImage/>
            <GallerySlickVideo/>
            <Footer/>
        </div>
    )
}