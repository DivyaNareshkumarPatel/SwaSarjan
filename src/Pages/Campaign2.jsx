import React from 'react'
import NavBar from "../Components/Navbar";
import CommonBanner from "../Components/CommonBanner";
import Campaign2Detail from '../Components/Campaign2Detail';
import Campaign2Gallery from '../Components/Campaign2Gallery';
import Campaign2Video from './Campaign2Video';
import Footer from '../Components/Footer';
export default function Campaign2() {
  return (
    <div>
      <NavBar />
      <CommonBanner head="Campaign" line1="Checkout our " line2="campaigns" />
      <Campaign2Detail/>
      <Campaign2Gallery/>
      <Campaign2Video/>
      <Footer/>
    </div>
  )
}
