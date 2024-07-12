import React, { useState, useEffect } from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CommonBanner from "../Components/CommonBanner";
import EventsCards from "../Components/EventsCards";
import EventNews from "../Components/EventNews";

import { API } from "../service/api"; // Adjust path as needed

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getEvents();
        if (response.isSuccess) {
          setEvents(response.data);
        } else {
          console.error('Error fetching events:', response.msg);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  function clk(){
    console.log(events)
  }
  return (
    <div>
      <NavBar />
      <CommonBanner head="Events" line1="Checkout our " line2="news and events" />
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <>
          {events.map((event) => (
            <EventsCards
              key={event._id} // Assuming _id is the unique identifier for each event
              title={event.title}
              description={event.description}
              date={new Date(event.date).getDate()} // Extract day from date
              month={new Date(event.date).toLocaleString('default', { month: 'short' })} // Extract month from date
              smallDesc={event.smallDesc}
              venue={event.venue}
              image={`http://localhost:8000/${event.image}`}
            />
          ))}
          <EventNews />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Events;
