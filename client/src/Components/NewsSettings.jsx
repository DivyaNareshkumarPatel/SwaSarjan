import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';
import { API } from '../service/api';
// import EventsCards from './EventsCards'; // Make sure to import EventsCards component
import EventNews from './EventNews';
const NewsSettings = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await API.getNews();
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



  const [image, setImage] = useState('');
  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await API.adminNews(formData);
      console.log('News created successfully:', response);

      setImage('')


      fetchData();
    } catch (error) {
      console.error('Error while creating news:', error);
      
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(`api called`)
      
      await API.deleteEvent({_id : id});
      fetchData(); 
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New News
      </Typography>
      <Typography variant="h7">
        ( *should at least five in present)
      </Typography>
      <Box component="form" action='/admin29/news' onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Event Image
              <input type="file" onChange={handleImageChange} accept="image/"/>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add News
            </Button>
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Existing News
        </Typography>
        {loading ? (
          <p>Loading news...</p>
        ) : (
            <EventNews isAdmin={true} />
        )}
      </Box>
    </Paper>
  );
};

export default NewsSettings;
