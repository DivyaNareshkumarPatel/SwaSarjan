import React from "react";
import NavBar from "../Components/Navbar";
import CommonBanner from "../Components/CommonBanner";
import AboutSwaSarjan from "../Components/AboutSwaSarjan";
import AboutWork from "../Components/AboutWork";
import AboutValues from "../Components/AboutValues";
import AboutTeam from "../Components/AboutTeam";
import Benifits from "../Components/Benifits";
import Volunteer from '../Components/Volunteer';
import Footer from '../Components/Footer';
import Awards from "../Components/Awards&Accreditations";
import AboutGallery from "../Components/AboutGallery";
export default function About() {
  return (
    <div>
      <NavBar />
      <CommonBanner head="About Us" line1="Know About us that" line2="Who we are & What we do" />
      <AboutSwaSarjan/>
      <AboutWork/>
      <AboutValues/>
      <AboutTeam/>
      <Benifits/>
      <Awards/>
      <AboutGallery/>
      <Volunteer/>
      <Footer/>
    </div>
  );
}
