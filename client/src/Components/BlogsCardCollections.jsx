import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import { API } from "../service/api";

export default function BlogsCardCollections() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.getBlogs()
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
      <div style={{ maxWidth: "1500px", display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
        {blogs.map((blog) => (
          <BlogsCard key={blog._id} details={blog} />
        ))}
      </div>
    </div>
  );
}
