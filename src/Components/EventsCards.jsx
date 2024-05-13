import React from "react";
import { styled, Box, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import Events from '../images/Events.png'

const MainContainer = styled(Box)({
    height:'auto',
    width:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
});

const Card = styled(Box)({
    width:'100%',
    margin:'20px 0px',
    display:'flex',
    // alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#F3F5F6'
});

const TextBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    // alignItems:'center',
    justifyContent:'center',
    
    
});

const SubTextBox1 = styled(Box)({
    marginBottom:'60px'
});

const SubTextBox2 = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
});
const DateTextBox = styled(Box)({
    display:'flex',
    margin:'0px 10px',
    flexDirection:'column',
    justifyContent:'flex-start',
    maxWidth:'300px',
    justifyContent:'space-between',
    alignContent:'space-around'
});
const AddressTextBox = styled(Box)({
    display:'flex',
    margin:'0px 10px',
    flexDirection:'column',
    justifyContent:'flex-start',
    maxWidth:'300px',
    justifyContent:'space-between',
    alignContent:'space-around'
});

// const EventTitle = styled(Typography)({
//     color:'#E5E5EA'
// });

const AdressIcon = styled(PlaceIcon)({
    color:'#E7E5ED',
    fontSize:'50px'
});
const DateIcon = styled(CalendarMonthIcon)({
    color:'#E7E5ED',
    fontSize:'50px'
});

// const DateVenuFont = styled(Typography)({
//     fontSize:'16px',
//     fontWeight:'bold'
// });

const EventsCards = () => {
    return(
        <MainContainer>
            <Card >
                <TextBox>
                    <SubTextBox1>
                        <Typography variant="h3" style={{fontWeight:'bold'}}>Project Sakhi</Typography>
                        <Typography variant="h6" style={{color:'#3C3C43'}}>
                            Skill and Knowledge Handing over Initiative for <br/>
                            Women in collaboration with CCA.
                        </Typography>
                    </SubTextBox1>
                    <SubTextBox2>
                        <DateTextBox>
                            <DateIcon/>
                            <Typography style={{fontWeight:'bold'}}>09 February</Typography> 
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>      
                        </DateTextBox>
                        <AddressTextBox>
                            <AdressIcon/>
                            <Typography style={{fontWeight:'bold'}}>Address</Typography>
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>
                        </AddressTextBox>
                    </SubTextBox2>
                </TextBox>
                <img src={Events}/>
            </Card>
            <Card >
                <img src={Events}/>
                <TextBox>
                    <SubTextBox1>
                        <Typography variant="h3" style={{fontWeight:'bold'}}>Project Sakhi</Typography>
                        <Typography variant="h6" style={{color:'#3C3C43'}}>
                            Skill and Knowledge Handing over Initiative for <br/>
                            Women in collaboration with CCA.
                        </Typography>
                    </SubTextBox1>
                    <SubTextBox2>
                        <DateTextBox>
                            <DateIcon/>
                            <Typography style={{fontWeight:'bold'}}>09 February</Typography> 
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>      
                        </DateTextBox>
                        <AddressTextBox>
                            <AdressIcon/>
                            <Typography style={{fontWeight:'bold'}}>Address</Typography>
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>
                        </AddressTextBox>
                    </SubTextBox2>
                </TextBox>
            </Card>
            <Card >
                <TextBox>
                    <SubTextBox1>
                        <Typography variant="h3" style={{fontWeight:'bold'}}>Project Sakhi</Typography>
                        <Typography variant="h6" style={{color:'#3C3C43'}}>
                            Skill and Knowledge Handing over Initiative for <br/>
                            Women in collaboration with CCA.
                        </Typography>
                    </SubTextBox1>
                    <SubTextBox2>
                        <DateTextBox>
                            <DateIcon/>
                            <Typography style={{fontWeight:'bold'}}>09 February</Typography> 
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>      
                        </DateTextBox>
                        <AddressTextBox>
                            <AdressIcon/>
                            <Typography style={{fontWeight:'bold'}}>Address</Typography>
                            <Typography style={{color:'#3C3C43'}}>
                                Proin vel vestibulum, orci,
                                 tempus metus, habitant faucibus 
                                 aliquet. 
                                Viverra posuere vitae eget.
                                </Typography>
                        </AddressTextBox>
                    </SubTextBox2>
                </TextBox>
                <img src={Events}/>
            </Card>


            
        </MainContainer>
    )
}

export default EventsCards;