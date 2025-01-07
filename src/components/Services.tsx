import React from "react";
import "./Services.css";

const Services: React.FC = () => (
  <div className="services-container">
    {/* Header Section */}
    <div className="services-header">
      <h1 className="services-title">Explore Our Services</h1>
      <p className="services-subtitle">
        Immerse yourself in our offerings that distinguish us with extraordinary quality and unmatched brilliance.
      </p>
    </div>

    {/* Service Section: Wedding Photography */}
    <div className="service-section">
      <img
        className="wed-image"
      />
      <div className="service-content">
        <h2 className="service-title">Wedding Photography</h2>
        <p className="service-description">
          We capture the magic of your wedding day with beautiful, high-quality photos. Our skilled photographers focus on
          every special moment, from loving glances to joyful celebrations. Using the best equipment, we ensure your memories
          are preserved perfectly.
        </p>
        <p className="service-description">
          Trust us to create stunning images you'll cherish forever, making your big day unforgettable. Experience the
          difference with our personalized and exceptional service.
        </p>
      </div>
    </div>

    {/* Service Section: Pre-Wedding Photography */}
    <div className="service-section reverse">
      <div className="service-content">
        <h2 className="service-title">Pre-Wedding Photography</h2>
        <p className="service-description">
          Celebrate your journey before the big day with our pre-wedding photography. From picturesque outdoor locations to
          intimate indoor settings, we bring out the essence of your love story through our lens.
        </p>
        <p className="service-description">
          Let us help you create timeless memories that capture the excitement and romance leading up to your wedding.
        </p>
      </div>
      <img 
        className="prewed-image"
      />
    </div>
  </div>
);

export default Services;
