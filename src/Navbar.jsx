import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // For search icon

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="bg-primary-gray shadow-none sticky top-0">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-primary-dark">
            <h6 className="text-primary-dark font-bold">henshelghor</h6>
          </a>
          {/* Navigation Links */}
          <a
            href="/"
            className="text-primary-dark hover:text-slate-600 no-underline font-semibold"
          >
            Home
          </a>
          <a
            href="/"
            className="text-primary-dark hover:text-slate-600 no-underline font-semibold"
          >
            About
          </a>
          <a
            href="/"
            className="text-primary-dark hover:text-slate-600 no-underline font-semibold"
          >
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search for inspiration"
            onClick={handleOpenDialog}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none", // Ensures no border
                },
              },
              borderRadius: "5px",
              backgroundColor: "#C7C2C2",
            }}
          />
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-primary-dark hover:text-slate-600 no-underline"
          >
            <button className="px-4 py-2 border border-transparent rounded-md hover:text-slate-600 font-semibold">
              Login
            </button>
          </a>
          <a
            href="/"
            className="text-primary-dark hover:text-white no-underline"
          >
            <button className="px-4 py-2 bg-transparent border border-primary-dark rounded-md text-primary-dark hover:bg-primary-dark hover:text-white font-semibold">
              Signup
            </button>
          </a>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="lg" // Set dialog width to 'lg'
        fullWidth={true}
        PaperProps={{
          sx: {
            position: "absolute",
            top: 100, // Aligns the dialog at the top
            margin: 0,
            transform: "translate(0, 0)", // Removes default center alignment
          },
        }}
      >
        <DialogContent sx={{ backgroundColor: "#D1CCCC" }}>
          {/* Top Content */}
          <div className="flex items-center justify-between mb-4">
            <DialogTitle sx={{ backgroundColor: "#D1CCCC", marginBottom: 0 }}>
              Filter Your Search
            </DialogTitle>
            {/* Search Bar Inside Dialog */}
            <div className="flex-grow mx-4">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Search inside dialog"
                sx={{
                  backgroundColor: "#C7C2C2",
                  border: "none",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root fieldset": { border: "none" },
                }}
              />
            </div>
            {/* Login and Signup Buttons */}
            <div className="flex space-x-2">
              <a href="/">
                <button className="px-4 py-2 border border-transparent rounded-md font-semibold hover:text-slate-600">
                  Login
                </button>
              </a>
              <a href="/">
                <button className="px-4 py-2 bg-transparent border border-primary-dark rounded-md text-primary-dark hover:bg-primary-dark hover:text-white font-semibold">
                  Signup
                </button>
              </a>
            </div>
          </div>

          {/* Columns with Dividers */}
          <div className="flex space-x-4">
            {/* Column 1 */}
            <div className="flex flex-col w-1/3">
              <h6 className="font-semibold">Categories</h6>
              <ul>
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
              </ul>
            </div>
            <Divider orientation="vertical" flexItem />

            {/* Column 2 */}
            <div className="flex flex-col w-1/3">
              <h6 className="font-semibold">Cuisine</h6>
              <ul>
                <li>Cuisine 1</li>
                <li>Cuisine 2</li>
                <li>Cuisine 3</li>
              </ul>
            </div>
            <Divider orientation="vertical" flexItem />

            {/* Column 3 */}
            <div className="flex flex-col w-1/3">
              <h6 className="font-semibold">Popularity</h6>
              <ul>
                <li>Popular 1</li>
                <li>Popular 2</li>
                <li>Popular 3</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
