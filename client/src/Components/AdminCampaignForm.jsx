import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { API } from '../service/api';

const AdminCampaignForm = ({ fetchCampaigns }) => {
    const [image, setImage] = useState('');
  const [campaign, setCampaign] = useState({
    topic: '',
    heading: '',
    slogan: '',
    content: '',
    conclusion: '',
    date:''
  });

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formdata = FormData();
        formdata.append('image',image)
        formdata.append('topic',campaign.topic)
        formdata.append('heading',campaign.heading)
        formdata.append('slogan',campaign.slogan)
        formdata.append('content',campaign.content)
        formdata.append('conclusion',campaign.conclusion)
      const response = await API.addCampaign(campaign);
      if (response.isSuccess) {
        fetchCampaigns();
      } else {
        console.error('Error adding campaign:', response.msg);
      }
    } catch (error) {
      console.error('Error adding campaign:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Campaign
      </Typography>
      <TextField
        label="Image URL"
        name="image"
        value={campaign.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Topic"
        name="topic"
        value={campaign.topic}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Heading"
        name="head"
        value={campaign.head}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Slogan"
        name="p1"
        value={campaign.p1}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        name="p2"
        value={campaign.p2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Conclusion"
        name="p3"
        value={campaign.p3}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default AdminCampaignForm;
