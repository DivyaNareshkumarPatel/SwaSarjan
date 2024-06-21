import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Campaign2Detail() {
  const Text = styled(Typography)({
    color: "#696969",
    fontSize: "18px",
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px auto",
        }}
      >
        <div style={{ maxWidth: "250px", margin: "20px" }}>
          <div>
            <div>
              <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                Awareness Program
              </Typography>
              <hr />
            </div>
            <Text style={{ marginTop: "20px", marginBottom: "30px" }}>
              15 February <br />
              Educational Awareness
            </Text>
          </div>
          <div>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#F26522",
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              60+
            </Typography>
          </div>
          <div>
            <Text sx={{ textAlign: "center" }}>
              Girls are educated <br />
              about Menstrual Hygiene
            </Text>
          </div>
        </div>
        <div style={{ maxWidth: "550px", fontSize: "16px", margin: "20px" }}>
          <div
            style={{
              textWrap: "wrap",
              maxWidth: "550px",
              textAlign: "justify",
              textJustify: "inter-word",
              marginTop: "40px",
            }}
          >
            Pinkishe foundation and Flipkart foundation, with the support of Swa
            Sarjan Foundation in Gujarat, has organized a menstrual hygiene
            awareness program at Hilol Primary School, Dehgam, Gandhinagar 🩸
            <br />
            <br />
            This program was successfully executed with the dedicated support of
            around 60+ girls in primary education and Coordinator Mr. Kiran
            Vyas. 🌟
            <br />
            <br />
            The key motto of this event was to break the wall of shyness from
            the girls and educate them to accept the natural phenomena of a
            female’s body and be proud to be born as a GIRL! 💪🌸
            <br />
            <br />
            Ms. Bhumi Sharma, the program trainer, has dedicated the work to
            break the cultural stigmas and taboos ingrained in the minds of
            young individuals. The entire surgeon team, including the boys, is
            committed to ushering in the new era by addressing previously
            untouched issues and wholeheartedly empowering these young girls.
            👧👦
            <br />
            <br />
            The goal of menstrual hygiene is to encourage cleanliness and health
            during a woman’s monthly period. Using the right menstrual care,
            like clean pads and keeping oneself neat, stops infections. Also,
            teaching good menstrual hygiene helps to lessen the negative
            feelings about periods and lets people control their time of the
            month with self-assurance. 🌺🌐
            <br />
            <br />
            “Empower change! Join the effort to make people aware of proper
            menstrual hygiene. Let’s end the negative views and share
            information. Give your knowledge, help, and backing. Every voice
            matters. 💬💖
            <br />
            <br />
            “Accept the benefits of taking care of yourself with good menstrual
            hygiene. Let’s remove any shame, stay neat, and help each other
            during our monthly periods. 💪🩸
            <br />
            <br />
            Together we strive to foster positive change and create an
            environment where every individual can thrive.
            <br />
            <br />
            Join @swa_sarjan and be a changemaker. 🌟
            <br />
            <br />
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <Link to="/donate">
              <Button
                sx={{
                  color: "white",
                  background: "#F26522",
                  width: "200px",
                  "&:hover": {
                    background: "black",
                  },
                }}
              >
                Donate
              </Button>
            </Link>
            <Link to="/registration">
              <Button
                sx={{
                  color: "white",
                  background: "#7622D7",
                  width: "200px",
                  "&:hover": {
                    background: "black",
                  },
                  marginTop:"10px"
                }}
              >
                Join SwaSarjan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
