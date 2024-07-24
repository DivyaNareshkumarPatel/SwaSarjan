import React from "react";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import img1 from "../images/Testimonial1.png";
import img2 from "../images/Testimonial2.png";
import img3 from '../images/Testimonial3.jpeg'
import TestimonialData from "./TestimonialData";
export default function HomeTestimonials() {
  const testimonial = [
    {
      content:
        "The team and volunteers of NGO are too good at their working . They organised an amazing events and handled it very well. I am very impressed with the NGO working and team members.",
      name: "David S. Neuman",
      designation: "Business Manager",
      image: img1,
    },
    {
      content:
        "Being part of Swa-Sarjan has been a rewarding experience. Their commitment to helping others and making a real difference in people's lives is exceptional.",
      name: "David S. Neuman",
      designation: "Business Manager",
      image: img2,
    },
    {
      content:
        "Swa-Sarjan's impact on the local community is profound. Their innovative approaches to charity work and support for the less fortunate are truly commendable.",
      name: "David S. Neuman",
      designation: "Business Manager",
      image: img3,
    },
  ];
  return (
    <div style={{background:"white", paddingTop:"40px", paddingBottom:"40px"}}>
      <div style={{marginLeft:"40px"}}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "10px" }}
        >
          Our Testimonials
        </Typography>
        <Typography>What  People  SAY</Typography>
      </div>
      <Carousel
        autoPlay
        animation="slide"
        indicators
        timeout={1000}
        navButtonsAlwaysVisible
      >
        {testimonial.map((item, index) => {
          return <TestimonialData key={index} item={item}></TestimonialData>;
        })}
      </Carousel>
    </div>
  );
}
