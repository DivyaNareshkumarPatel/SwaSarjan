import React from "react";
import NavBar from "../Components/Navbar";
import CommonBanner from "../Components/CommonBanner";
import AboutSwaSarjan from "../Components/AboutSwaSarjan";
export default function About() {
  return (
    <div>
      <NavBar />
      <CommonBanner head="About Us" line1="Know About us that" line2="Who we are & What we do" />
      <AboutSwaSarjan/>
    </div>
  );
}
