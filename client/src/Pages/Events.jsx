import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CommonBanner from "../Components/CommonBanner";
import EventsCards from "../Components/EventsCards";
import EventNews from "../Components/EventNews";
const Events = () => {
    return(
        <div>
            <NavBar/>
            <CommonBanner head="Events" line1="Checkout our " line2="news and events"/>
            <EventsCards/>
            <EventNews/>
            <Footer/>
        </div>
    )
}

export default Events;