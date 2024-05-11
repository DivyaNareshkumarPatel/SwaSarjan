import React, { useState } from "react";
import { Grid, Typography, Box, styled } from "@mui/material";

const MainContainer = styled(Box)({
  textAlign: 'center',
  padding: '20px',
  margin:'80px 0px'
});

const GridBox = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(118, 34, 215, 0.05)' : '#FFFFFF',
  padding: '50px 20px 50px 20px',
  margin: '10px 10px 10px 10px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}));

const Topic = styled(Typography)({
  color: '#7622D7',
  fontWeight: 'bolder',
  marginBottom: '20px',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  textAlign:'left',
  marginBottom: '10px',
});

const MainTitle = styled(Typography)({
    fontWeight: 'bold',
  marginBottom: '10px',
});

const SmallTitle = styled(Typography)({
    fontSize: '0.8rem',
    marginBottom: '10px',
  });

const Content = styled(Typography)({
  fontSize: '1rem',
  lineHeight: '1.6',
  textAlign:'left',
  textWrap:'wrap'
});

const ReadMore = styled(Typography)({
  color: '#7622D7',
  cursor: 'pointer',
  textAlign:'left'
});

const Num = styled(Typography)({
    color:'#7622D7',
    textAlign:'left' 
});

const Benifits = () => {
  // const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  // const handleExpand = () => {
  //   setExpanded(!expanded);
  // };
  
  const handleExpand1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpand3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpand4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpand5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpand6 = () => {
    setExpanded6(!expanded6);
  };
  return (
    <MainContainer>
      <Topic variant="h6">
        Our Benefits
      </Topic>
      <MainTitle variant="h4">
        By Joining SwaSarjan Foundation, One<br/> Can Avail a Lot Of Benefits.
      </MainTitle>
      <SmallTitle>
        Join SwaSarjan, be a member or a volunteer to get a chance of availing a lot<br/> of benefits that one can get.
      </SmallTitle>
      <Grid container spacing={2}>
        {/* Large Screen */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox style={{backgroundColor:'#F8F4FD'}}>
            <Num variant="h5">01</Num>
            <Title>Societal Contribution</Title>
            <Content>
              Working for an NGO allows you to contribute to the betterment of society.
              Your efforts can lead to positive changes in the lives of many people...
            </Content>
            {expanded1 && (
                <Content>
                Working for an NGO allows you to contribute to the betterment of society.
                Your efforts can lead to positive changes in the lives of many people.
                Working for an NGO allows you to contribute to the betterment of society.
                Your efforts can lead to positive changes in the lives of many people.
              </Content>
            )}
            <ReadMore onClick={handleExpand1}>{expanded1 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
        {/* Tablet Screen */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox>
            <Num variant="h5">02</Num>
            <Title>Life-changing Experience</Title>
            <Content>
            You engage in work that is meaningful and creates an impact in others' lives.
             You can get a sense of satisfaction...
            </Content>
            {expanded2 && (
              <Content>
                You engage in work that is meaningful and creates an impact in others' lives.
                 You can get a sense of satisfaction.You engage in work that is meaningful and
                  creates an impact in others' lives. You can get a sense of satisfaction knowing 
                 that you're making a difference and contributing positively to society.
                 This sense of fulfillment and purpose can enrich your life and provide a
                 deeper meaning to your work.
              </Content>
            )}
            <ReadMore onClick={handleExpand2}>{expanded2 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
        {/* Mobile Screen */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox style={{backgroundColor:'#F8F4FD'}}>
            <Num variant="h5">03</Num>
            <Title>Enhance your CV</Title>
            <Content>
            Some colleges need students to do social service for a <br/>certain number of hours.<br/> 
            It shows your marketability... 
            </Content>
            {expanded3 && (
              <Content>
                Some colleges require students to engage in social service for a specified 
                number of hours. This requirement not only demonstrates your commitment to 
                community engagement but also enhances your marketability to potential employers. 
                By participating in social service activities, you develop valuable skills 
                such as teamwork, communication, and problem-solving, which are highly sought 
                after in the job market. Additionally, employers often view candidates with a 
                history of social service involvement as individuals who are socially 
                responsible and community-minded, making them more attractive candidates 
                for employment opportunities.
              </Content>
            )}
            <ReadMore onClick={handleExpand3}>{expanded3 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox>
            <Num variant="h5">04</Num>
            <Title>Make New Connections</Title>
            <Content>
            You get opportunities to connect with like-minded <br/>individuals. NGOs create a feeling of togetherness and camaraderie among members, fostering a supportive...
            </Content>
            {expanded4 && (
              <Content>
                You get opportunities to connect with like-minded individuals. NGOs create a feeling of 
                togetherness and camaraderie among members, fostering a supportive community where 
                individuals can share ideas, collaborate on projects, 
                and build meaningful relationships. Being part of a network of like-minded 
                individuals allows you to exchange knowledge, experiences, and perspectives,
                enriching your personal and professional growth. Whether it's through volunteering,
                attending events, or participating in advocacy campaigns, the sense of belonging to
                a community united by common goals and values can be both empowering and fulfilling.
              </Content>
            )}
            <ReadMore onClick={handleExpand4}>{expanded4 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox style={{backgroundColor:'#F8F4FD'}}>
            <Num variant="h5">05</Num>
            <Title>Gain personal growth</Title>
            <Content>
            It is a rewarding journey that enhances your life. It also leaves a lasting, positive impact on the people around you...
            </Content>
            {expanded5 && (
              <Content>
                It is a rewarding journey that enhances your life in numerous ways. 
                By contributing your time and skills to meaningful causes, you not 
                only make a difference in the lives of others but also experience 
                personal growth and fulfillment. Engaging in social service fosters 
                empathy, compassion, and a deeper understanding of societal issues, 
                ultimately enriching your perspective and worldview. Furthermore, 
                your efforts leave a lasting, positive impact on the people around you, 
                inspiring others to join in creating positive change and building stronger, 
                more resilient communities.
              </Content>
            )}
            <ReadMore onClick={handleExpand5}>{expanded5 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <GridBox>
            <Num variant="h5">06</Num>
            <Title>Valuable Professional Skills</Title>
            <Content>
            Volunteering for an NGO helps you develop essential skills for the job market, including effective communication...
            </Content>
            {expanded6 && (
              <Content>
                Volunteering for an NGO helps you develop essential skills for the job 
                market, including effective communication, teamwork, leadership, and 
                problem-solving. These skills are highly valued by employers and can 
                significantly enhance your employability and career prospects. Additionally, 
                volunteering provides valuable hands-on experience and opportunities to 
                network with professionals in your field, further strengthening your resume 
                and professional connections. By engaging in meaningful volunteer work, you 
                not only contribute to important causes but also invest in your own personal
                 and professional development, setting yourself apart in the competitive job market.
              </Content>
            )}
            <ReadMore onClick={handleExpand6}>{expanded6 ? 'Read Less' : 'Read More'}</ReadMore>
          </GridBox>
        </Grid>
      </Grid>
    </MainContainer>
  );
}

export default Benifits;
