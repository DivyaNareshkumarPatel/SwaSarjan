import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CommonBanner from '../Components/CommonBanner';
import GalleryImageGridList from '../Components/GalleryImageGridList';
// import GalleryVideoCarousel from '../Components/GalleryVideoCarousel';
import GallerySlickVideo from '../Components/GallerySlickVideo';
export default function Gallery() {
    return(
        <div>
            <NavBar/>
            <CommonBanner head="Our Gallery" line1="Know Our Work " line2="Through Documentry" />
            <GalleryImageGridList/>
            {/* <GalleryVideoCarousel/> */}
            <GallerySlickVideo/>
            <Footer/>
        </div>
    )
}