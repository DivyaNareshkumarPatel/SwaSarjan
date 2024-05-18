import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, useMediaQuery,Radio, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import OrangeLogo from '../images/Swa Icon Name Orange.png';
import CancelIcon from '@mui/icons-material/Cancel';

const Payment = () => {
    const [showUPIMethods, setShowUPIMethods] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [showCardDetails, setShowCardDetails] = useState(false);

    const handleSelectCard = (card) => {
        setSelectedCard(card);
    };

    const handleToggleCardDetails = () => {
        setShowCardDetails(!showCardDetails);
    };

    const handleUPIClick = () => {
        setShowUPIMethods(!showUPIMethods);
    };

    const handleSelectMethod = (method) => {
        setSelectedMethod(method);
    };

    const isMedium = useMediaQuery("(max-width:807px)");

    return (
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} p={4}>
            <Card variant="outlined" sx={{ flex: 1 , minWidth: isMedium? 'auto':'400px' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Payment Method
                    </Typography>
                    <Box mb={2} style={{ maxWidth:'400px',}}>
                        <Button
                            variant={selectedMethod === 'UPI' ? 'contained' : 'outlined'}
                            startIcon={<GoogleIcon />}
                            fullWidth
                            sx={{ justifyContent: 'space-between' }}
                            onClick={handleUPIClick}
                        >
                            UPI
                        </Button>
                    </Box>
                    {showUPIMethods && (
                        <Box mb={2} style={{ maxWidth:'400px',}}>
                            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, mb: 1 }}>
                                <Box display="flex" alignItems="center">
                                    <GoogleIcon sx={{ mr: 1 }} />
                                    <Typography>Google Pay</Typography>
                                </Box>
                                <Radio
                                    checked={selectedMethod === 'Google Pay'}
                                    onClick={() => handleSelectMethod('Google Pay')}
                                />
                            </Card>
                            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, mb: 1 }}>
                                <Box display="flex" alignItems="center">
                                    <img src="https://placehold.co/20x12" alt="PhonePe" style={{ marginRight: 8 }} />
                                    <Typography>PhonePe</Typography>
                                </Box>
                                <Radio
                                    checked={selectedMethod === 'PhonePe'}
                                    onClick={() => handleSelectMethod('PhonePe')}
                                />
                            </Card>
                        </Box>
                    )}
                    <Box mb={2} style={{ maxWidth:'400px',}}>
                        <Button
                            variant="outlined"
                            startIcon={<CreditCardIcon />}
                            fullWidth
                            sx={{ justifyContent: 'space-between' }}
                            onClick={handleToggleCardDetails}
                        >
                            Debit Card
                        </Button>
                    </Box>
                    {showCardDetails && (
                        <Box style={{ maxWidth:'400px',}}>
                            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, mb: 1 }}>
                                <Box display="flex" alignItems="center">
                                    <AccountBalanceIcon sx={{ color: 'red', mr: 1 }} />
                                    <Typography>Axim Bank **** 4578</Typography>
                                </Box>
                                <Radio
                                    checked={selectedCard === 'Axim Bank'}
                                    onClick={() => handleSelectCard('Axim Bank')}
                                />
                            </Card>
                            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
                                <Box display="flex" alignItems="center">
                                    <img src="https://placehold.co/20x12" alt="VISA" style={{ marginRight: 8 }} />
                                    <Typography>HDFC Bank **** 4521</Typography>
                                </Box>
                                <Radio
                                    checked={selectedCard === 'HDFC Bank'}
                                    onClick={() => handleSelectCard('HDFC Bank')}
                                />
                            </Card>
                            <Box mt={2} style={{ maxWidth:'400px',}}>
                                <Button variant="outlined" fullWidth>
                                    + Add New Cards
                                </Button>
                            </Box>
                        </Box>
                    )}
                    <Box mt={2} style={{ maxWidth:'400px',}}>
                        <Button variant="outlined" fullWidth>
                            + Add New Method
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            
            <Card variant="outlined" sx={{ 
                flex: 1, 
                borderRadius: '10px 10px 0px 0px', 
                backgroundColor: '#F4F4F4', 
                padding: '20px', 
                width: 'auto',
                maxWidth:isMedium?'auto':'400px' }}>
                <CardContent>
                    <Box style={{ padding: '20px' }} display="flex" justifyContent="space-between" alignItems="center" maxWidth={'100%'} >
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center",
                                maxWidth: "inherit",
                                justifyContent: "space-between",
                                margin: '10px 10px',
                            }}
                            className="bg-white rounded-lg shadow-md flex items-center justify-between "
                            boxShadow={3}
                            borderRadius={2}
                        >
                            <Box display="flex" alignItems="center" style={{ minWidth: 'auto', padding: '20px' }} gap={4}>
                                <img src={OrangeLogo} alt="Logo" style={{ width: '40px', height: '50px' }} className="rounded-full" />
                                <Box>
                                    <Typography variant="h6" className="text-zinc-800 font-semibold" style={{ fontSize: '15px' }}>
                                        Core Membership
                                    </Typography>
                                    <Typography variant="subtitle1" className="text-zinc-500 text-sm">
                                        Rs. 2000 /-
                                    </Typography>
                                </Box>
                            </Box>
                            <Box position="relative" top={0} right={0}>
                                <CancelIcon />
                            </Box>
                        </Box>
                    </Box>
                    <Divider />
                    <Box mt={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Payment Details
                        </Typography>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Amount</Typography>
                            <Typography>Rs. 2000.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Other</Typography>
                            <Typography>Rs. 0.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" fontWeight="fontWeightBold">
                            <Typography>Total</Typography>
                            <Typography>Rs. 2000.00/-</Typography>
                        </Box>
                        </Box>
                        <Box mt={2}>
                            <Button variant="contained" color="primary" fullWidth>
                                Pay Now
                            </Button>
                        </Box>
                        </CardContent>
                        </Card>
                        </Box>
                        );
                        };

export default Payment;

