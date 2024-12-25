import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/pic1.jpg";
import "./Home.css"; // Import the CSS file

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); // Navigate to the Contact page
  };

  return (
    <motion.div
      className="background-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Capture Your Moments</h1>
        <h2 className="subtitle">Transforming Moments into Timeless Memories.</h2>
      </div>

      {/* Book Now Button */}
      <motion.button
        className="book-now-button"
        whileHover={{ scale: 1.1 }}
        onClick={handleButtonClick}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default Home;
