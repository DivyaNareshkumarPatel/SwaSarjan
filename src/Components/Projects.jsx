import React from "react";
import { Button, Typography, styled, Box } from '@mui/material';
import project1Image from './project1.png';
import project2Image from './project2.png';
import project3Image from './project3.png';
import project4Image from './project4.png';

const OuterContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "auto",
    padding: '0 1rem',
    width: '100%',
});

const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
    width: '100%',
    maxWidth: '1000px',
    padding: '1rem',
    margin: '2rem auto',
});

const SubContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
});

const LeftSubContainer = styled(SubContainer)({
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (max-width: 600px)': {
        alignItems: 'center', // Center alignment on small screens
    },
});

const RightSubContainer = styled(SubContainer)({
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 600px)': {
        alignItems: 'center', // Center alignment on small screens
    },
});

const Heading = styled(Typography)(({theme}) => ({
    fontSize: '30px',
    marginBottom: '10px',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center', // Center alignment on small screens
    },
}));

const SubHeading = styled(Typography)(({theme}) => ({
    fontSize: '15px',
    textAlign: 'left',
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
    maxWidth: '100%',
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
                        <Typography variant="h6">Project Sakhi</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                Skill and Knowledge Handling over initiative for Women in collaboration with CCA.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </Box>
                </LeftSubContainer>

                <RightSubContainer>
                    <Image src={project2Image} alt='Project2' />
                    <Box>
                        <Typography variant="h6">Awareness Program</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We have organized a menstrual hygiene Awareness program to educate girls.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </Box>
                </RightSubContainer>

                <LeftSubContainer>
                    <Image src={project3Image} alt='Project3' />
                    <Box>
                        <Typography variant="h6">Blood Donation Camp</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We organized a blood donation camp with IEEE GUNI SB & WIE SB.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </Box>
                </LeftSubContainer>

                <RightSubContainer>
                    <Image src={project4Image} alt='Project4' />
                    <Box>
                        <Typography variant="h6">Tree Plantation Program</Typography>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We planted trees under Azadi ka Amrit Mahotsav campaign.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </Box>
                </RightSubContainer>
            </MainContainer>
        </OuterContainer>
    )
}

export default Projects;
