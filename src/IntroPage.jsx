import React, { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import HoverCard from "./HoverCard";
import Footer from "./Footer";

const IntroPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Fetch blog posts on component mount
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/blog-posts`)
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <Box
      className="bg-primary-gray h-screen flex flex-col"
      sx={{ margin: 0, padding: 0 }}
    >
      {/* Top Section */}
      <Box className="pt-20 text-center flex-shrink-0">
        <Container sx={{ padding: 0 }}>
          <Typography variant="h6" className="text-gray-700 mb-4 tracking-wide">
            {currentDate}
          </Typography>
        </Container>
        <Container sx={{ padding: 0 }}>
          <Typography
            variant="h1"
            className="text-gray-900 font-extrabold leading-tight text-center"
            sx={{
              fontSize: {
                xs: "10vw", // Extra small devices
                sm: "8vw", // Small devices
                md: "6vw", // Medium devices
                lg: "5vw", // Large devices
              },
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            FEEL DELICIOUSNESS
          </Typography>
        </Container>
      </Box>

      {/* Cards Section */}
      <Box className="flex-grow p-8" sx={{ backgroundColor: "inherit" }}>
        <Container
          maxWidth={false}
          sx={{
            padding: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {/* Render HoverCard for each blog post */}
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <HoverCard
                  key={post.id}
                  id={post.id}
                  title={post.name} // Use name from API response
                  image={post.imageUrl || "https://via.placeholder.com/800x600"} // Default image if no imageUrl
                  author={post.user.name} // Access user.name for the author
                  date={new Date(post.ct).toLocaleDateString()} // Format the creation time (ct)
                />
              ))
            ) : (
              <Typography variant="h6" className="text-gray-700 text-center">
                No blog posts available.
              </Typography>
            )}
          </div>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default IntroPage;
