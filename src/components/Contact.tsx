import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "user_name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return "Name must contain only letters and spaces.";
        }
        break;
      case "user_email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address.";
        }
        break;
      case "user_phone":
        if (!/^\+?[0-9\s()-]{10,15}$/.test(value)) {
          return "Please enter a valid phone number.";
        }
        break;
      case "message":
        if (/<|>/.test(value)) {
          return "Invalid characters detected in the message.";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value.trim());
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValues = form.current;
    if (formValues) {
      const newErrors: { [key: string]: string } = {};
      Array.from(formValues.elements).forEach((field) => {
        const input = field as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement;
        if (input.name) {
          const error = validateField(input.name, input.value.trim());
          if (error) {
            newErrors[input.name] = error;
          }
        }
      });

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        emailjs
          .sendForm(
            "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            form.current,
            "YOUR_USER_ID" // Replace with your EmailJS user ID (API Key)
          )
          .then(
            (result) => {
              alert("Message sent successfully!");
              console.log(result.text);
            },
            (error) => {
              alert("Failed to send message, please try again later.");
              console.log(error.text);
            }
          );
      }
    }
  };

  return (
    <div className="contact-page">
      {/* Left Section: Form */}
      <div className="contact-form-section">
        <h1 className="contact-title">Get in Touch</h1>
        <p>We'd ❤️ to help!</p>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              onBlur={handleBlur}
              required
            />
            {errors["user_name"] && (
              <p className="error">{errors["user_name"]}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              onBlur={handleBlur}
              required
            />
            {errors["user_email"] && (
              <p className="error">{errors["user_email"]}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              onBlur={handleBlur}
              required
            />
            {errors["user_phone"] && (
              <p className="error">{errors["user_phone"]}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="event">Event Type</label>
            <select id="event" name="event_type" onBlur={handleBlur} required>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="event_date"
              onBlur={handleBlur}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              onBlur={handleBlur}
              required
            ></textarea>
            {errors["message"] && <p className="error">{errors["message"]}</p>}
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="contact-info-section">
        <h2 className="info-title">Contact Us</h2>
        <p>
          <strong>Location:</strong> 123 Main Street, Columbia, SC
        </p>
        <p>
          <strong>Phone:</strong> (617) 312-2190
        </p>
        <p>
          <strong>Email:</strong> donny@groverwebdesign.com
        </p>
        <h2 className="info-title">Our Office</h2>
        <p>
          Visit us for a personalized consultation and to see our portfolio!
        </p>
        <iframe
          title="Google Maps Location"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509608!2d144.95373631550474!3d-37.81627974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f74e7f%3A0x34a62ff556b4d6d2!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1633923932716!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
