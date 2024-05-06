import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@material-ui/core";
import sponsor1 from "../images/sponsor1.png";
import sponsor2 from "../images/sponsor2.png";
import sponsor3 from "../images/sponsor3.png";
import sponsor4 from "../images/sponsor4.png";
import sponsor5 from "../images/sponsor5.png";
import sponsor6 from "../images/sponsor6.png";
import sponsor7 from "../images/sponsor7.png";
import sponsor8 from "../images/sponsor8.png";
import sponsor9 from "../images/sponsor9.png";
import sponsor10 from "../images/sponsor10.png";
const HomeSponsors = () => {
  const [size, setSize] = useState(5);
  const sponsors = [
    { name: "Knight Frank India Pvt Ltd", logoUrl: sponsor1 },
    { name: "Spandana Sphoorty Financial Ltd", logoUrl: sponsor2 },
    { name: "Trent Ltd", logoUrl: sponsor3 },
    { name: "Incred Finanacial Services Ltd", logoUrl: sponsor4 },
    { name: "Women of Opinion", logoUrl: sponsor5 },
    { name: "Titan Company Ltd", logoUrl: sponsor6 },
    { name: "Verve", logoUrl: sponsor7 },
    { name: "Course5 Intelligence Ltd", logoUrl: sponsor8 },
    { name: "Strawberry Frog", logoUrl: sponsor9 },
    { name: "Apollo Finvest", logoUrl: sponsor10 },
  ];
  const chunkSponsors = (sponsors, size) => {
    const chunkedArray = [];
    for (let i = 0; i < sponsors.length; i += size) {
      chunkedArray.push(sponsors.slice(i, i + size));
    }
    return chunkedArray;
  };
  const calculateChunkSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setSize(5);
    } else if (screenWidth >= 992) {
      setSize(4);
    } else if (screenWidth >= 768) {
      setSize(3);
    } else if (screenWidth >= 576) {
      setSize(2);
    } else {
      setSize(1);
    }
  };
  useEffect(() => {
    calculateChunkSize();
    window.addEventListener("resize", calculateChunkSize);
    return () => {
      window.removeEventListener("resize", calculateChunkSize);
    };
  }, []);
  const responsiveChunks = chunkSponsors(sponsors, size);

  return (
    <div style={{ backgroundColor: "#0C0C0C", color: "white", paddingBottom:"40px" }}>
      <div style={{ padding: "40px" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "10px" }}
        >
          Our Sponsors
        </Typography>
        <Typography>The sponsors of SwaSarjan Foundation</Typography>
      </div>
      <Carousel
        autoPlay
        animation="slide"
        indicators
        timeout={500}
        navButtonsAlwaysVisible
      >
        {responsiveChunks.map((group, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
            }}
          >
            {group.map((sponsor, subIndex) => (
              <div key={subIndex}>
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  style={{ maxWidth: "100%", borderRadius: "50%" , marginBottom:"10px"}}
                />
                <Typography style={{width:"150px"}}>{sponsor.name}</Typography>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSponsors;
