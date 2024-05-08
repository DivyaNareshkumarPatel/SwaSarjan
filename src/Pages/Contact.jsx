import React from 'react'
import NavBar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import ContactMain from '../Components/ContactMain'
import ContactUsMap from '../Components/ContactUsMap';
import Footer from '../Components/Footer';
export default function Contact() {
  return (
    <div>
      <NavBar/>
      <CommonBanner head="Contact Us" line1="Contact us to join" line2="SwaSarjan Foundation"/>
      <ContactMain/>
      <ContactUsMap/>
      <Footer/>
    </div>
  )
}
