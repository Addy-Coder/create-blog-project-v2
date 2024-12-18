import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-primary-dark py-6 mt-auto w-full">
      <div className="flex flex-col items-center justify-center text-center text-white">
        {/* Copyright Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FEEL DELICIOUSNESS.
        </p>
        <p className="text-sm">All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4">
          <IconButton
            color="inherit"
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            <Instagram />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
