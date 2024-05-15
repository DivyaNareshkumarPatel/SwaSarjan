import React from "react";
import { Box, Typography, styled, Grid  } from '@mui/material';
import left_leaf from '../images/left_leaf.png';
import right_leaf from '../images/right_leaf.png';

const BlackBox = styled(Box)({
    backgroundColor:'#0C0C0C',
    textAlign: 'center'
});

const GridBox = styled(Grid)(({ theme }) => ({
    backgroundColor: '#0C0C0C',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}));

const Title = styled(Typography)({
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'bold',
    padding:'50px'
});

const Content = styled(Typography)({
    color:'#FFFFFF',
    textAlign:'center'
});

// const ViewButton = styled(Button)({
//     margin: '60px',
//     color: '#FFFFFF',
//     borderColor: '#FFFFFF',
//     borderRadius: '30px',
//     fontSize: '15px',
//     padding:'5px 30px',
//     '&:hover': {
//         backgroundColor:'#FFFFFF',
//         color:'#0C0C0C',
//         borderColor: '#FFFFFF'
//     }
// });

const Awards = () => {
    return (
        <BlackBox>
            <Title variant="h4">Awards & Accreditations</Title>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={7} md={5} lg={5}>
                    <GridBox>
                        <img src={left_leaf} alt=""/>
                        <Content>
                            Recognition as “NGO that brought 
                            most happiness” by India Today 
                            RPG Happiness Award 2023
                        </Content>
                        <img src={right_leaf} alt=""/>
                    </GridBox>
                </Grid>
                <Grid item xs={12} sm={7} md={5} lg={5}>
                    <GridBox>
                        <img src={left_leaf} alt=""/>
                        <Content>
                            Recognition as “NGO that brought 
                            most happiness” by India Today 
                            RPG Happiness Award 2023
                        </Content>
                        <img src={right_leaf} alt=""/>
                    </GridBox>
                </Grid>
                <Grid item xs={12} sm={7} md={5} lg={5}>
                    <GridBox>
                        <img src={left_leaf} alt=""/>
                        <Content>
                            Recognition as “NGO that brought 
                            most happiness” by India Today 
                            RPG Happiness Award 2023
                        </Content>
                        <img src={right_leaf} alt=""/>
                    </GridBox>
                </Grid>
                <Grid item xs={12} sm={7} md={5} lg={5}>
                    <GridBox>
                        <img src={left_leaf} alt=""/>
                        <Content>
                            Recognition as “NGO that brought 
                            most happiness” by India Today 
                            RPG Happiness Award 2023
                        </Content>
                        <img src={right_leaf} alt=""/>
                    </GridBox>
                </Grid>
            </Grid>
            {/* <ViewButton variant="outlined">View All</ViewButton> */}
        </BlackBox>
    )
}

export default Awards;
