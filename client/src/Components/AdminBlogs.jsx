import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { API } from '../service/api';
import BlogForm from './AdminBlogForm';
import BlogCard from './BlogCards'; 
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
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Existing Blogs
        </Typography>
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <Grid container spacing={2}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id}>
                <BlogCard
                  title={blog.title}
                  content={blog.content}
                  image={blog.image}
                  onDelete={() => handleDelete(blog._id)} 
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AdminBlogs;
