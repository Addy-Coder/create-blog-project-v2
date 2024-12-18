import React from "react";
import { Card, CardMedia, IconButton, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom"; // For navigation

const HoverCard = ({ id, title, author }) => {
  const navigate = useNavigate(); // Use React Router's navigate function

  // Handle card click
  const handleCardClick = () => {
    navigate(`/blog/${id}`); // Navigate to the blog detail page using the ID
  };

  return (
    <Card
      className="group relative max-w-sm rounded-xl overflow-hidden shadow-lg"
      sx={{
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
      onClick={handleCardClick} // Handle the click event
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        height="600"
        image="https://via.placeholder.com/800x600"
        alt="Sample Image"
        className="group-hover:brightness-50 transition-all duration-300"
      />

      {/* Overlay Content */}
      <Box
        className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Adds dark overlay on hover
        }}
      >
        {/* Title and Author Section together at top left */}
        <Box
          sx={{ zIndex: 10, position: "absolute", top: "10px", left: "10px" }}
        >
          <Typography
            variant="h6"
            className="font-semibold"
            sx={{
              zIndex: 10,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              zIndex: 10,
              fontWeight: "normal", // Make author text less bold
              marginTop: "5px",
            }}
          >
            by <span className="font-normal">{author}</span>
          </Typography>
        </Box>

        {/* Action Buttons Section */}
        <Box
          className="flex space-x-4 mt-2 justify-center"
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              color: "white",
              backgroundColor: "rgba(255,255,255,0.2)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: "white",
              backgroundColor: "rgba(255,255,255,0.2)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default HoverCard;
