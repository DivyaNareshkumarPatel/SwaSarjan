import React from "react";
import { Button, Typography, styled , Box } from '@mui/material';
import project1Image from './project1.png';
import project2Image from './project2.png';
import project3Image from './project3.png';
import project4Image from './project4.png';

const OuterContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: '0 2rem', 
    width:'auto'
});

const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width:'1000px',
    // maxWidth: '800px',
    background: '',
    padding: '1rem',
    borderRadius: '1rem',
    margin: '2rem',
    // gap: '2rem',
});

const SubContainer = styled(Box)({
    // width: '100%', 
    padding: '10px',
    background: '',
    border: '4rem',
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: '',
});

const LeftSubContainer = styled(SubContainer)({
    alignSelf: 'flex-start', 
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center'
});

const RightSubContainer = styled(SubContainer)({
    alignSelf: 'flex-end', 
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center'
});

const Heading = styled(Typography)({
    fontSize: '30px',
    marginBottom: '10px',
    textAlign: 'left',
});

const SubHeading = styled(Typography)({
    fontSize: '15px',
    textAlign: 'left',
});

const TextBox = styled(Box)({
    boxSizing: 'content-box',
    height: '10vh'
});

const TextBoxTitle = styled(Typography)({
    color: 'purple',
    fontSize: '20px',
});

const TextBoxContentBox = styled(Box)({
    width:'275px',
    maxHeight:'10vh'
});

const TextBoxContent = styled(Typography)({
    color: 'black',
    fontSize: '15px',
    // textAlign:'-webkit-match-parent',
    textWrap:'wrap',
    
});

const TextBoxButton = styled(Button)({
    variants:'outlined',
    borderRadius:'60px',
    marginTop:'15px',
    borderColor:'black',
    color:'black',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        TransitionEvent:'2'
    },
});

const Image = styled('img')({
    height: '200px',
    // width: '100%', 
    margin: '0 20px 0 20px', 
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
                    <TextBox>
                        <TextBoxTitle>
                            Project Sakhi
                        </TextBoxTitle>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                Skill and Knowledge Handling over initiative for Women in collaboration with CCA.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </TextBox>
                </LeftSubContainer>

                <RightSubContainer>
                    <TextBox>
                        <TextBoxTitle>
                            Awareness Program
                        </TextBoxTitle>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We have organized a menstrual hygiene Awareness program to educate girls.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </TextBox>
                    <Image src={project2Image} alt='Project2' />
                </RightSubContainer>

                <LeftSubContainer>
                    <Image src={project3Image} alt='Project3' />
                    <TextBox>
                        <TextBoxTitle>
                            Blood Donation Camp
                        </TextBoxTitle>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We organized a blood donation camp with IEEE GUNI SB & WIE SB.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </TextBox>
                </LeftSubContainer>

                <RightSubContainer>
                    <TextBox>
                        <TextBoxTitle>
                            Tree Plantation Program
                        </TextBoxTitle>
                        <TextBoxContentBox>
                            <TextBoxContent>
                                We planted trees under Azadi ka Amrit Mahotsav campaign.
                            </TextBoxContent>
                        </TextBoxContentBox>
                        <TextBoxButton variant="outlined">
                            Read more
                        </TextBoxButton>
                    </TextBox>
                    <Image src={project4Image} alt='Project4' />
                </RightSubContainer>
            </MainContainer>
        </OuterContainer>
    )
}

export default Projects;
