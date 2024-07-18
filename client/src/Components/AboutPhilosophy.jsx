import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'rgba(118, 34, 215, 0.6)',
  color: 'white',
  margin: '10px',
  borderRadius: '10px',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#3b237b',
  fontSize: '2rem',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.6rem',
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '1.5rem',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.4rem',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#F26522',
  fontSize: '2rem',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.2rem',
  },
}));

const AboutPhilosophy = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 2, sm: 6, md: 12 }, backgroundColor: 'white' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <MainTitle variant="h4">
          Our Philosophy
        </MainTitle>
        <Typography variant="subtitle1" color="textSecondary">
          Inclusivity: bring change, along with uplifting oneself and the people around. SELF-DEVELOPMENT.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={6}>
          <StyledBox>
            <Heading>Our Mission</Heading>
            <Text>Recreating the views of society.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={6} sm={6}>
          <StyledBox>
            <Heading>Our Vision</Heading>
            <Text>Create a sustainable community.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={6} sm={6}>
          <StyledBox>
            <Heading>Our Goals</Heading>
            <Text>A better tomorrow, a better mind.</Text>
          </StyledBox>
        </Grid>
        <Grid item xs={6} sm={6}>
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
