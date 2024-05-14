import React from "react";
import { Box, Typography } from '@mui/material';
import { styled } from "@mui/styles";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from "react-router-dom";

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

const Month = styled(Box)({
});

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
  color:'#0C0C0C'
}); 

const HomeEvents = () => {
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
          <SubContainer>
            <DateBox>
              <Num>05</Num>
              <Month>MAR</Month>
            </DateBox>
            <ContentBox>
              <ContentCategory>
                <ContentText variant="h6">EDUCATION</ContentText>
                <hr style={{ height: '0.2px', width: '20px', flex: 1, backgroundColor: '#212121', color: 'black', margin: '0' }} />
              </ContentCategory>
              <Content>
                <Typography variant="h5">
                  Encouraged children to study and provided support to those in need
                </Typography>
              </Content>
            </ContentBox>
            <ArrowButtonBox>
              <Link to='/events'>
              <ArrowCircleRightIcon style={{ fontSize: '50px',color:'#0C0C0C' }} />
              </Link>
            </ArrowButtonBox>
          </SubContainer>

          {/* Add more SubContainers here */}

          <SubContainer>
            <DateBox>
              <Num>10</Num>
              <Month>JUN</Month>
            </DateBox>
            <ContentBox>
              <ContentCategory>
                <ContentText variant="h6">ENVIRONMENT</ContentText>
                <hr style={{ height: '0.2px', width: '20px', flex: 1, backgroundColor: '#212121', color: 'black', margin: '0' }} />
              </ContentCategory>
              <Content>
                <Typography variant="h5">
                  Organized a beach clean-up and raised awareness about marine conservation
                </Typography>
              </Content>
            </ContentBox>
            <ArrowButtonBox>
            <Link to='/events'>
              <ArrowCircleRightIcon style={{ fontSize: '50px',color:'#0C0C0C' }} />
              </Link>
            </ArrowButtonBox>
          </SubContainer>

          <SubContainer>
            <DateBox>
              <Num>20</Num>
              <Month>AUG</Month>
            </DateBox>
            <ContentBox>
              <ContentCategory>
                <ContentText variant="h6">HEALTH</ContentText>
                <hr style={{ height: '0.2px', width: '20px', flex: 1, backgroundColor: '#212121', color: 'black', margin: '0' }} />
              </ContentCategory>
              <Content>
                <Typography variant="h5">
                  Conducted a health awareness camp and provided free medical check-ups
                </Typography>
              </Content>
            </ContentBox>
            <ArrowButtonBox>
            <Link to='/events'>
              <ArrowCircleRightIcon style={{ fontSize: '50px',color:'#0C0C0C' }} />
              </Link>
            </ArrowButtonBox>
          </SubContainer>

          <SubContainer>
            <DateBox>
              <Num>30</Num>
              <Month>NOV</Month>
            </DateBox>
            <ContentBox>
              <ContentCategory>
                <ContentText variant="h6">COMMUNITY</ContentText>
                <hr style={{ height: '0.2px', width: '20px', flex: 1, backgroundColor: '#212121', color: 'black', margin: '0' }} />
              </ContentCategory>
              <Content>
                <Typography variant="h5">
                  Arranged a food donation drive and distributed meals to homeless people
                </Typography>
              </Content>
            </ContentBox>
            <ArrowButtonBox>
            <Link to='/events'>
              <ArrowCircleRightIcon style={{ fontSize: '50px' , color:'#0C0C0C' }} />
              </Link>
            </ArrowButtonBox>
          </SubContainer>
        </MainContainer>
      </OuterContainer>
    </div>
  )
}

export default HomeEvents;
