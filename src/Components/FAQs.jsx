import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const MainContainer = styled(Box)({
  backgroundColor: 'gray'
});

const BodyBox = styled(Box)({
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  padding: '10px 0px 20px 0px',
  '&:hover': {
    backgroundColor: '#fff',
  },
  '&:active': {
    backgroundColor: '#fff',
  },
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

const NumBox = styled(Box)({
  color: 'gray',
  margin: '10px 50px 10px 10px'
});

const ContentBox = styled(Box)({
  cursor: 'pointer'
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '30px',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
});

const Content = styled(Typography)({
  textWrap: 'pretty',
  fontSize: '1.2rem',
  '@media (max-width: 900px)': {
    fontSize: '1rem',
  },
});

const FAQs = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [color1, setColor1] = useState('#fff');
  const [color2, setColor2] = useState('#fff');
  const [color3, setColor3] = useState('#fff');
  const [color4, setColor4] = useState('#fff');

  const handleToggle1 = () => {
    setShow1(!show1);
    setColor1(color1 === '#fff' ? '#C8A6EF' : '#fff');
    setShow2(false);
    setColor2('#fff');
    setShow3(false);
    setColor3('#fff');
    setShow4(false);
    setColor4('#fff');
  }

  const handleToggle2 = () => {
    setShow1(false);
    setColor1('#fff');
    setShow2(!show2);
    setColor2(color2 === '#fff' ? '#C8A6EF' : '#fff');
    setShow3(false);
    setColor3('#fff');
    setShow4(false);
    setColor4('#fff');
  }

  const handleToggle3 = () => {
    setShow1(false);
    setColor1('#fff');
    setShow2(false);
    setColor2('#fff');
    setShow3(!show3);
    setColor3(color3 === '#fff' ? '#C8A6EF' : '#fff');
    setShow4(false);
    setColor4('#fff');
  }

  const handleToggle4 = () => {
    setShow1(false);
    setColor1('#fff');
    setShow2(false);
    setColor2('#fff');
    setShow3(false);
    setColor3('#fff');
    setShow4(!show4);
    setColor4(color4 === '#fff' ? '#C8A6EF' : '#fff');
  }

  return (
    <div style={{ background: "white", paddingTop: "40px", paddingBottom: "40px" }}>
      <div style={{ padding: "0px 40px 0px 40px" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "10px" }}
        >
          FAQs
        </Typography>
        <MainContainer>
          <BodyBox style={{ backgroundColor: color1 }}>
            <NumBox>
              <Typography variant='h3'>01</Typography>
            </NumBox>
            <ContentBox onClick={handleToggle1}>
              <Title style={{ fontWeight: "bold", marginBottom: "10px" }}>Alright, but what actually we do ?</Title>
              {show1 && <Content>As an NGO agency we work for social world. We organized such events that encourage the children youth for an education, rural areas' people get free health check-ups, tree plantation programs.</Content>}
            </ContentBox>
          </BodyBox>

          <BodyBox style={{ backgroundColor: color2 }}>
            <NumBox>
              <Typography variant='h3'>02</Typography>
            </NumBox>
            <ContentBox onClick={handleToggle2}>
              <Title style={{ fontWeight: "bold", marginBottom: "10px" }}>I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together ?</Title>
              {show2 && <Content>As an NGO agency we work for social world. We organized such events that encourage the children youth for an education, rural areas' people get free health check-ups, tree plantation programs.</Content>}
            </ContentBox>
          </BodyBox>

          <BodyBox style={{ backgroundColor: color3 }}>
            <NumBox>
              <Typography variant='h3'>03</Typography>
            </NumBox>
            <ContentBox onClick={handleToggle3}>
              <Title style={{ fontWeight: "bold", marginBottom: "10px" }}>How to contribute in SwaSarjan ?</Title>
              {show3 && <Content>As an NGO agency we work for social world. We organized such events that encourage the children youth for an education, rural areas' people get free health check-ups, tree plantation programs.</Content>}
            </ContentBox>
          </BodyBox>

          <BodyBox style={{ backgroundColor: color4 }}>
            <NumBox>
              <Typography variant='h3'>04</Typography>
            </NumBox>
            <ContentBox onClick={handleToggle4}>
              <Title style={{ fontWeight: "bold", marginBottom: "10px" }}>Why do you have a monthly project cap ?</Title>
              {show4 && <Content>As an NGO agency we work for social world. We organized such events that encourage the children youth for an education, rural areas' people get free health check-ups, tree plantation programs.</Content>}
            </ContentBox>
          </BodyBox>
        </MainContainer>
      </div>
    </div>
  )
};

export default FAQs;