import React from "react";
import NavBar from "../Components/Navbar";
import CommonBanner from "../Components/CommonBanner";
import AboutSwaSarjan from "../Components/AboutSwaSarjan";
import AboutWork from "../Components/AboutWork";
import AboutValues from "../Components/AboutValues";
export default function About() {
  return (
    <div>
      <NavBar />
      <CommonBanner head="About Us" line1="Know About us that" line2="Who we are & What we do" />
      <AboutSwaSarjan/>
      <AboutWork/>
      <AboutValues/>
    </div>
  );
}
