import React from "react";
import NavBar from "../Components/Navbar";
import CommonBanner from "../Components/CommonBanner";
import CampaignComponent from "../Components/CampaignComponent";
import img1 from "../images/campaign1.png";
import img2 from "../images/campaign2.png";
import Footer from "../Components/Footer";
const details = [
  {
    image: img1,
    head: "Blood Donation Camp",
    head2: "Donate Blood & Save People",
    p1: "Saving lives starts with a single act of kindness: blood donation🩸",
    p2: "Witness the power of compassion as SSF joins forces with IEEE GUNI SB, WIE GUNI SB, and Ganpat University Women Development Cell in organizing a remarkable blood donation camp💪🤝Over 160 incredible individuals united to donate, bringing hope and happiness to those in need. 🌟💖",
    p3: "Join us as we make a difference and inspire others to do the same!",
  },
  {
    image: img2,
    head: "Awareness Program",
    head2: "Aware about good menstrual Hygiene",
    p1: "“Accept the benefits of taking care of yourself with good menstrual hygiene. Let’s remove any shame, stay neat, and help each other during our monthly periods. 💪🩸",
    p2: "Pinkishe foundation and Flipkart foundation, with the support of Swa Sarjan Foundation in Gujarat, has organized a menstrual hygiene awareness program at Hilol Primary School, Dehgam, Gandhinagar 🩸",
    p3: "This program was successfully executed with the dedicated support of around 60+ girls in primary education and Coordinator Mr. Kiran Vyas. 🌟",
  },
];
export default function Campaign() {
  return (
    <div>
      <NavBar />
      <CommonBanner head="Campaign" line1="Checkout our " line2="campaigns" />
      <div style={{margin:"20px auto"}}>
        {details.map((details, index)=>(
          <CampaignComponent detail={details}/>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
