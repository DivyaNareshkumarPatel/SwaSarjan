import React from "react";
import { Button, Typography, styled, Box } from '@mui/material';
import { Link } from "react-router-dom";
import project1Image from './project1.png';
import project2Image from './project2.png';
import project3Image from './project3.png';
import project4Image from './project4.png';

const OuterContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "auto",
    // padding: '0 1rem',
    width: '100%',
});

const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // maxWidth: '800px',
    padding: '1rem',
    // margin: '2rem auto',
});

const SubContainer = styled(Box)({
    width: '100%',
});

const LeftSubContainer = styled(SubContainer)({
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // '@media (max-width: 600px)': {
    //     alignItems: 'center', // Center alignment on small screens
    // },
    display:"flex",
    justifyContent:"space-evenly",
    width:"100%",
    flexWrap:"wrap",
    alignItems:"center",
    marginBottom:"20px"
});

const RightSubContainer = styled(SubContainer)({
    // flexDirection: 'column',
    // alignItems: 'flex-end',
    // '@media (max-width: 600px)': {
    //     alignItems: 'center', // Center alignment on small screens
    // },
    display:"flex",
    justifyContent:"space-evenly",
    flexDirection:"row-reverse",
    alignItems:"center",
    width:"100%",
    flexWrap:"wrap",
    marginBottom:"20px"
});

const Heading = styled(Typography)(({theme}) => ({
    fontSize: '2rem',
    marginBottom: '10px',
    fontWeight:"bold",
    color:"#2C2C2C",
    textAlign: 'left',
    paddingTop:"top",
    paddingLeft:"20px",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center', // Center alignment on small screens
    },
}));

const SubHeading = styled(Typography)(({theme}) => ({
    paddingLeft:"20px",
    fontSize: '15px',
    textAlign: 'left',
    marginBottom:"20px",
    color:"#5C5C5C",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center', // Center alignment on small screens
    },
}));

const TextBoxContentBox = styled(Box)({
    maxWidth: '100%',
    maxHeight: 'auto',
});

const TextBoxContent = styled(Typography)({
    color: 'black',
    textAlign: 'left',
    maxWidth:"400px",
    
});

const TextBoxButton = styled(Button)({
    variants: 'outlined',
    borderRadius: '60px',
    marginTop: '15px',
    borderColor: 'black',
    color: 'black',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        TransitionEvent: '2'
    },
});

const Image = styled('img')({
    height: 'auto',
    maxWidth: '80%',
    margin: '0 0 20px 0',
});

const Projects = () => {
    return (
        <OuterContainer>
            <MainContainer>
                <Heading>
                    Our Projects Programs
                </Heading>
                <SubHeading>
                    Social Projects & Programs Under the SwaSarjan Foundation
                </SubHeading>

                <LeftSubContainer>
                    <Image src={project1Image} alt='Project1' />
                    <Box>
                        <Typography variant="h6" sx={{fontWeight:"bold", marginBottom:"10px", color:"#7622D7"}}>Project Sakhi</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                Skill and Knowledge Handling over initiative for Women in collaboration with CCA.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <Link to="/events">
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                        </Link>
                    </Box>
                </LeftSubContainer>

                <RightSubContainer>
                    <Image src={project2Image} alt='Project2' />
                    <Box>
                        <Typography variant="h6" sx={{fontWeight:"bold", marginBottom:"10px", color:"#7622D7"}}>Awareness Program</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We have organized a menstrual hygiene Awareness program to educate girls.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <Link to="/events">
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                        </Link>
                    </Box>
                </RightSubContainer>

                <LeftSubContainer>
                    <Image src={project3Image} alt='Project3' />
                    <Box>
                        <Typography variant="h6" sx={{fontWeight:"bold", marginBottom:"10px", color:"#7622D7"}}>Blood Donation Camp</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We organized a blood donation camp with IEEE GUNI SB & WIE SB.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <Link to="/events">
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                        </Link>
                    </Box>
                </LeftSubContainer>

                <RightSubContainer>
                    <Image src={project4Image} alt='Project4' />
                    <Box>
                        <Typography variant="h6" sx={{fontWeight:"bold", marginBottom:"10px", color:"#7622D7"}}>Tree Plantation Program</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We planted trees under Azadi ka Amrit Mahotsav campaign.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <Link to="/events">
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                        </Link>
                    </Box>
                </RightSubContainer>
            </MainContainer>
        </OuterContainer>
    )
}

export default Projects;
