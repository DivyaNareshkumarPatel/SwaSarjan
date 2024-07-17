import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { API } from '../service/api';
import BlogForm from './AdminBlogForm';
import BlogsCardCollections from './BlogsCardCollections';

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await API.getBlogs();
      if (response.isSuccess) {
        setBlogs(response.data);
      } else {
        console.error('Error fetching blogs:', response.msg);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.deleteBlog(id);
      fetchBlogs(); 
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <>
      <BlogForm fetchBlogs={fetchBlogs} />
      <Box sx={{ marginTop: 4, marginBottom: '50px' }}>
        <Typography variant="h5" gutterBottom>
          Existing Blogs
        </Typography>
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <Grid container spacing={2}>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <div style={{ maxWidth: "1500px", display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                <BlogsCardCollections isAdmin={true} />
              </div>
            </div>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AdminBlogs;
