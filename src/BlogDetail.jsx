import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For getting the blog post ID from the URL
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  IconButton,
  TextField,
  Button,
  Container,
  Typography,
} from "@mui/material";

const BlogDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [blogPost, setBlogPost] = useState(null);
  const [comment, setComment] = useState("");

  // Fetch the blog post details when the component mounts
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/blog-posts/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    alert("Comment Submitted: " + comment);
    setComment(""); // Clear comment input after submission
  };

  if (!blogPost) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div className="bg-primary-gray min-h-screen pb-12">
      {/* Blog Header Section */}
      <div className="bg-primary-dark text-primary-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h4" className="font-extrabold mb-4">
            {blogPost.name} {/* Dynamically rendering blog title */}
          </Typography>
          <div className="flex justify-center items-center gap-4 text-gray-400">
            <Typography variant="h6">
              by <span className="font-semibold">{blogPost.user.name}</span>
            </Typography>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-lg leading-relaxed space-y-6">
          <Typography variant="body1">
            {blogPost.content} {/* Dynamically rendering blog content */}
          </Typography>
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Blog Image"
            className="w-full h-auto mb-6 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
