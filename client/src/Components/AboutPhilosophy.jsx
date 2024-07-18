import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'rgba(118, 34, 215, 0.6)',
  color: 'white',
  margin: '10px 10px 10px 10px',
  borderRadius: '10px',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '30px',
  marginTop: '0px',
  color: '#3b237b',
  fontSize: '2rem',
}));

const Text = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '2rem',
  alignSelf:'center',
  marginBottom: '40px',
}));

const Topic = styled(Typography)({
    color: '#333333',
    fontWeight: 'bolder',
    marginBottom: '20px',
  });
  const MainTitle = styled(Typography)({
    fontWeight: 'bold',
  marginBottom: '10px',
  color:'#F26522'
});
const AboutPhilosophy = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 12, backgroundColor: 'white' }}>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center'
      }}>
        <MainTitle variant="h4">
            Our Philosophy
        </MainTitle>
        <Topic variant="h6">
        Inclusivity: bring change, along with uplifting oneself and the people<br/> around. SELF-DEVELOPMENT.
        </Topic>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <StyledBox>
            <Heading>Our Mission</Heading>
            <Text>Recreating the views of society.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledBox>
            <Heading>Our Vision</Heading>
            <Text>Create a sustainable community.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledBox>
            <Heading>Our Goals</Heading>
            <Text>A better tommorrow, a better mind.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledBox>
            <Heading>Our Belief</Heading>
            <Text>You Can, It's That Simple.</Text>
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPhilosophy;
