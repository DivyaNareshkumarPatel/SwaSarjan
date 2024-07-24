import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import styled from "@emotion/styled";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from "react-router-dom";
import { API } from "../service/api"; // Adjust path as needed

const OuterContainer = styled(Box)({
  padding: '0 40px',
});

const Title = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
});

const MainContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
});

const SubContainer = styled(Box)({
  backgroundColor: '#6FD0E5',
  borderRadius: '10px',
  flex: '1 1 calc(50% - 20px)', 
  margin: '0 20px 20px 0',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 676px)': {
    flexDirection: 'column', 
    height: 'auto', 
  }
});

const DateBox = styled(Box)({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 676px)': {
    display: 'none', 
  }
});

const Num = styled(Box)({
  fontSize: '60px',
});

const Month = styled(Box)({});

const ContentBox = styled(Box)({
  padding: '20px',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
});

const ContentCategory = styled(Box)({
  maxWidth: '240px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const ContentText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1em',
});

const Content = styled(Box)({
  marginTop: '10px',
});

const ArrowButtonBox = styled(Box)({
  minWidth: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0C0C0C'
});

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const HomeEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getEvents(); // Assuming API.getEvents() retrieves event data
        if (response.isSuccess) {
          setEvents(response.data); // Set events state with fetched data
        } else {
          console.error('Error fetching events:', response.msg);
        }
        setLoading(false); // Update loading state once data is fetched
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchData(); // Invoke fetchData function on component mount
  }, []);

  return (
    <div style={{ background: "white", paddingTop: "40px", paddingBottom: "40px" }}>
      <OuterContainer>
        <Title>
          <Typography variant="h4" fontWeight="bold" fontSize="2em" gutterBottom>
            Our Events
          </Typography>
          <hr style={{ height: '1px', width: '100%', flex: 1, backgroundColor: '#DDDD', color: 'black' }} />
        </Title>
        <MainContainer>
          {loading ? (
            <p>Loading events...</p>
          ) : (
            events.map((event) => (
              <SubContainer key={event._id}>
                <DateBox>
                  <Num>{new Date(event.date).getDate()}</Num>
                  <Month>{new Date(event.date).toLocaleString('default', { month: 'short' })}</Month>
                </DateBox>
                <ContentBox>
                  <ContentCategory>
                    <ContentText variant="h6">{event.eventType}</ContentText>
                    <hr style={{ height: '0.2px', width: '20px', flex: 1, backgroundColor: '#212121', color: 'black', margin: '0' }} />
                  </ContentCategory>
                  <Content style={{ width: "100%" }}>
                    <Typography
                      variant="h5"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: isSmallScreen ? 1 : 2,
                      }}
                    >
                      {truncateText(event.description, isSmallScreen ? 20 : 100)}
                    </Typography>
                  </Content>
                </ContentBox>
                <ArrowButtonBox>
                  <Link to={`/events`}>
                    <ArrowCircleRightIcon style={{ fontSize: '50px', color: '#0C0C0C' }} />
                  </Link>
                </ArrowButtonBox>
              </SubContainer>
            ))
          )}
        </MainContainer>
      </OuterContainer>
    </div>
  );
};

export default HomeEvents;
