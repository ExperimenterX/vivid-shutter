import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Welcome to Vivid Shutter</h1>
        <p className="about-quote">
          "Photography is the story we fail to put into words."
        </p>
      </div>
      <div className="about-content">
        <div className="about-motivation">
          <h2>Our Motivation</h2>
          <p>
            At Vivid Shutter, we believe that every moment is precious, and
            capturing it means preserving memories for a lifetime. Our team is
            driven by the desire to freeze time, transform emotions into
            timeless images, and tell stories through every frame we capture.
          </p>
          <p>
            Photography isn't just a profession for us; it's a passion. We are
            inspired by the joy on our clients' faces when they see their
            memories beautifully captured. This joy is our biggest motivation.
          </p>
        </div>
        <div className="about-journey">
          <h2>Our Journey</h2>
          <p>
            What started as a hobby has now transformed into a full-fledged
            photography business dedicated to excellence. Over the years, we
            have worked tirelessly to refine our craft, staying up-to-date with
            the latest trends and techniques in the industry.
          </p>
          <p>
            Vivid Shutter began as a dream—a dream to tell stories through
            pictures. Today, we have grown into a trusted brand that caters to a
            wide array of photography needs, from weddings and portraits to
            corporate events and creative photoshoots.
          </p>
          <p>
            Our commitment to continuous improvement ensures that we provide our
            clients with the best possible service. Every photo we take reflects
            our dedication to excellence and our passion for storytelling.
          </p>
          <p>
            Join us on this exciting journey and let us capture your most
            cherished moments with creativity and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
