import React , {useState} from "react";
import { Typography, outlinedInputClasses } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BorderColor } from "@mui/icons-material";
import { CiTextAlignCenter } from "react-icons/ci";
const Payment = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
    <div style={{
        display:'flex',
        width:'100%'
    }}>
        <div style={{
            height:'70vh',
            width:'500px',
            padding:'0px 40px',
            margin:'0px 10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'',
            justifyContent:''
        }}>
            <Typography variant="h4" style={{
                fontWeight:'bold',
                marginBottom:'20px'
                }}>
                    Payment Method
                </Typography>
            <Box sx={{ minWidth: 120 }}
            style={{
                marginBottom:'20px',
                maxWidth:'400px'
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">UPI</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}
            style={{
                marginBottom:'20px',
                maxWidth:'400px'
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Debit/Credit Card</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            <Box style={{
                border:'solid',
                BorderColor:'#F4F4F4',
                maxWidth:'400px',
                TextAlign:'Center'
            }}>
                <Typography>Add New Card</Typography>
            </Box>
        </div>
        <div style={{
            backgroundColor:'#F4F4F4',
            borderRadius:'10px 10px 0px 0px',
            height:'70vh'
        }}>
            cejwbfiewbfi
        </div>
    </div>
    )
    
}

export default Payment;