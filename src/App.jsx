import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router components
import Navbar from "./Navbar";
import IntroPage from "./IntroPage";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar will be available across all routes */}
        <Navbar />

        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<IntroPage />} /> {/* Home Page */}
          <Route path="/blog/:id" element={<BlogDetail />} />{" "}
          {/* Blog Detail Page with dynamic id */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
