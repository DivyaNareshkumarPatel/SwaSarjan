import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import BlogModal from "./BlogModal";
import { API } from "../service/api";

export default function BlogsCardCollections({ isAdmin }) {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.getBlogs();
        if (response.isSuccess) {
          setBlogs(response.data);
        } else {
          console.error('Failed to fetch blogs:', response.msg);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const handleDeleteBlog = async (id) => {
    try {
      const response = await API.deleteBlog(id);
      if (response.isSuccess) {
        setBlogs(blogs.filter(blog => blog._id !== id));
        console.log('Successfully deleted!');
      } else {
        console.error('Failed to delete blog:', response.msg);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleCreateBlog = async (newBlog) => {
    try {
      const response = await API.adminBlog(newBlog);
      if (response.isSuccess) {
        setBlogs([...blogs, response.data]);
        console.log('Successfully created!');
      } else {
        console.error('Failed to create blog:', response.msg);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
      <div style={{ maxWidth: "1500px", display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
        {blogs.map((blog) => (
          <BlogsCard 
            key={blog._id} 
            details={blog} 
            onCardClick={handleCardClick} 
            onDeleteClick={() => handleDeleteBlog(blog._id)} 
            isAdmin={isAdmin} 
          />
        ))}
      </div>
      <BlogModal 
        open={isModalOpen} 
        handleClose={handleCloseModal} 
        details={selectedBlog} 
        onCreate={handleCreateBlog}
      />
    </div>
  );
}
