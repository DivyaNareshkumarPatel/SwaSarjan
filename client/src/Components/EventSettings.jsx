import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';
import { API } from '../service/api';
const EventSettings = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    venue: '',
    smallDesc: '',
    eventType: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      image: e.target.files[0], // Set the selected file to the image field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', eventData.title);
      formData.append('description', eventData.description);
      formData.append('date', eventData.date);
      formData.append('venue', eventData.venue);
      formData.append('smallDesc', eventData.smallDesc);
      formData.append('eventType', eventData.eventType);
      formData.append('image', eventData.image); // Append the image file to FormData

      const response = await API.adminEvent(formData)
      console.log('Event created successfully:', response.data);

      // Clear form data after successful submission
      setEventData({
        title: '',
        description: '',
        date: '',
        venue: '',
        smallDesc: '',
        eventType: '',
        image: null,
      });
    } catch (error) {
      console.error('Error while creating event:', error);
      // Handle error state or show error message to the user
    }
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New Event
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Event Title"
              fullWidth
              value={eventData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Event Description"
              fullWidth
              multiline
              rows={4}
              value={eventData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="date"
              label="Event Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={eventData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="venue"
              label="Event Venue"
              fullWidth
              value={eventData.venue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="smallDesc"
              label="Small Description"
              fullWidth
              value={eventData.smallDesc}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="eventType"
              label="Event Type"
              fullWidth
              value={eventData.eventType}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Event Image
              <input type="file" onChange={handleImageChange} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Event
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EventSettings;
