import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';
import { API } from '../service/api';
import EventsCards from './EventsCards'; // Make sure to import EventsCards component

const EventSettings = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await API.getEvents();
      if (response.isSuccess) {
        setEvents(response.data);
        } else {
          console.error('Error fetching events:', response.msg);
        }
        setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    venue: '',
    smallDesc: '',
    eventType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [image, setImage] = useState('');
  const handleImageChange = (e) => {
    setImage(e.target.files[0])
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
      formData.append('image', image);

      const response = await API.adminEvent(formData);
      console.log('Event created successfully:', response);

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

      // Fetch the updated list of events
      fetchData();
    } catch (error) {
      console.error('Error while creating event:', error);
      // Handle error state or show error message to the user
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(`api called`)
      await API.deleteEvent(id);
      fetchData(); // Refresh events list after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New Event
      </Typography>
      <Box component="form" action='/admin29/events' onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
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
              <input type="file" onChange={handleImageChange} accept="image/"/>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Event
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Existing Events
        </Typography>
        {loading ? (
          <p>Loading events...</p>
        ) : (
          
          events.map((event) => (
            <EventsCards
              key={event._id} // Assuming _id is the unique identifier for each event
              title={event.title}
              description={event.description}
              date={new Date(event.date).getDate()} // Extract day from date
              month={new Date(event.date).toLocaleString('default', { month: 'short' })} // Extract month from date
              smallDesc={event.smallDesc}
              venue={event.venue}
              image={`http://localhost:8000/${event.image}`}
              onDelete={() => handleDelete(event._id)} // Pass the delete function to the card
              isAdmin={true} // Pass isAdmin as true for the admin view
            />
          ))
        )}
      </Box>
    </Paper>
  );
};

export default EventSettings;
