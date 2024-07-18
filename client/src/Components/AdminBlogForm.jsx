import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';
import { API } from '../service/api';

const getCurrentDateFormatted = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const AdminBlogForm = ({ fetchBlogs }) => {

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: '',
    role:'',
    date: getCurrentDateFormatted()
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('content', blogData.content);
      formData.append('author', blogData.author);
      formData.append('role', blogData.role);
      formData.append('date', blogData.date);

      if (image) {
        formData.append('image', image);
      }
      console.log(formData.values())
      const response = await API.adminBlog(formData);
      console.log('Blog created successfully:', response);

      
      setBlogData({
        title: '',
        content: '',
        author:'',
        role:''
      });
      setImage(null);

      fetchBlogs();
    } catch (error) {
      console.error('Error while creating blog:', error);
    }
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Blog Title"
              fullWidth
              value={blogData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="content"
              label="Blog Content"
              fullWidth
              multiline
              rows={4}
              value={blogData.content}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="author"
              label="Blog author"
              fullWidth
              rows={4}
              value={blogData.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="role"
              label="Blog author role"
              fullWidth
              rows={4}
              value={blogData.role}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Blog Image
              <input type="file" onChange={handleImageChange} accept="image/*"  />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Blog
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AdminBlogForm;
