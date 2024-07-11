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
    width:'90%',
    margin:'20px 0px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#F3F5F6',
    flex:1,
    "@media (min-width: 900px)": {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1
    },
});

const TextBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    padding: '20px',
    "@media (min-width: 900px)": {
        flex: 1,
    },
});

const SubTextBox1 = styled(Box)({
    marginBottom:'20px',
});

const SubTextBox2 = styled(Box)({
    display:'flex',
    flexDirection:'column',
    "@media (min-width: 900px)": {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
});

const DateTextBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    margin:'10px',
    maxWidth:'300px',
    "@media (min-width: 900px)": {
        flex: 1,
        margin:'0px 20px'
    },
});

const AddressTextBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    margin:'10px',
    maxWidth:'300px',
    "@media (min-width: 900px)": {
        flex: 1,
        margin:'0px 20px'
    },
});

const AdressIcon = styled(PlaceIcon)({
    color:'#E7E5ED',
    fontSize:'50px'
});

const DateIcon = styled(CalendarMonthIcon)({
    color:'#E7E5ED',
    fontSize:'50px'
});

const EventsCards = ({title, description, date, month, smallDesc, venue}) => {
    return(
        <MainContainer>
            <Card>
                <TextBox>
                    <SubTextBox1>
                        <Typography variant="h3" style={{fontWeight:'bold'}}>{title}</Typography>
                        <Typography variant="h6" style={{color:'#3C3C43'}}>
                            {description}
                        </Typography>
                    </SubTextBox1>
                    <SubTextBox2>
                        <DateTextBox>
                            <DateIcon/>
                            <Typography style={{fontWeight:'bold'}}>{date} {month}</Typography> 
                            <Typography style={{color:'#3C3C43'}}>
                                {smallDesc}
                            </Typography>      
                        </DateTextBox>
                        <AddressTextBox>
                            <AdressIcon/>
                            <Typography style={{fontWeight:'bold'}}>Address</Typography>
                            <Typography style={{color:'#3C3C43'}}>
                                {venue}
                            </Typography>
                        </AddressTextBox>
                    </SubTextBox2>
                </TextBox>
                <img src={Events} style={{ maxWidth: '100%' , borderRadius:'10px'}} alt="" />
            </Card>
        </MainContainer>
    )
}

export default EventsCards;
