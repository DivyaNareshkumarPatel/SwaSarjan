import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';

const EventSettings = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    venue: '',
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
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(eventData);
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Event Image
              <input
                type="file"
                hidden
                onChange={handleImageChange}
              />
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
