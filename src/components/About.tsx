import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import photographerImage1 from "../assets/pic3.jpg";
import photographerImage2 from "../assets/pic4.jpg";
import photographerImage3 from "../assets/pic1.jpg";
import backgroundImage from "../assets/pic5.jpg";

const About: React.FC = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const sections = [
    {
      text: "My journey in photography began in 2019, sparked by a passion for bird photography. It was a gateway to discovering the joy of capturing moments, and I soon decided to channel my skills into wedding photography professionally in 2020.",
      image: photographerImage1,
    },
    {
      text: "In January 2021, I began assisting a seasoned wedding photographer to sharpen my craft. This invaluable mentorship laid the foundation for my successful career and taught me the intricacies of storytelling through photographs.",
      image: photographerImage2,
    },
    {
      text: "Today, I'm proud to have captured over 100 weddings and completed more than 20 personal projects. Every photo I take reflects my dedication to excellence, and I look forward to telling your unique love story through my lens.",
      image: photographerImage3,
    },
  ];

  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fixed Header */}
      <div className="about-header">
        <div className="header-content">
          <div className="home-button-container">
            <button
              className="button"
              data-text="Back"
              onClick={() => navigate("/")} // Navigate to the homepage
            >
              <span className="actual-text">&nbsp;Home&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;Home&nbsp;
              </span>
            </button>
          </div>
          <div className="title-container">
            <h1 className="about-title">Hello, I'm Vajir Ahamad</h1>
            <p className="about-quote">
              "Photography is the story we fail to put into words."
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Scrolling Sections */}
      <div className="about-scroll-container">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`about-section ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="about-text">
              <p>{section.text}</p>
            </div>
            <div className="about-image-container">
              <img
                src={section.image}
                alt={`Section ${index + 1}`}
                className="about-image"
              />
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            style={{ paddingBottom: "10px" }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            style={{ paddingBottom: "10px" }}
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shankar-bhavani"
            target="_blank"
            style={{ paddingBottom: "10px" }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ExperimenterX"
            target="_blank"
            style={{ paddingBottom: "10px" }}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-contact-info">
          <p style={{ fontSize: "1.2rem" }}>
            <strong>Contact:</strong> +1 (123) 456-7890 | email@example.com
          </p>
        </div>
        <div className="footer-info" style={{ fontSize: "0.8rem" }}>
          <p>
            Developed by <strong>Bhavani Shankar</strong>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
