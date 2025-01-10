import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/Mpic1.jpg";
import "./Home.css"; // Import the CSS file
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Home: React.FC = () => {
  const whatsappNumber = "+917899587092"; // Replace with your WhatsApp number

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
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Capture Your Moments</h1>
        <h2 className="subtitle">
          Transforming Moments into Timeless Memories.
        </h2>
      </div>

      {/* Book Now Button */}
      <motion.button
        className="book-now-button"
        whileHover={{ scale: 1.1 }}
        onClick={() => (window.location.href = "/contact")}
      >
        Book Now
      </motion.button>

      {/* WhatsApp Floating Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
    </motion.div>
  );
};

export default Home;
