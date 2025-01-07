import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css"; // Import CSS for additional styling

// Importing images explicitly
import photo1 from "../assets/album1/1.jpg";
import photo2 from "../assets/album1/9.jpg";
import photo3 from "../assets/album1/3.jpg";
import photo4 from "../assets/album1/4.jpg";
import photo5 from "../assets/album1/5.jpg";
import photo6 from "../assets/album1/6.jpg";
import photo7 from "../assets/album1/7.jpg";
import photo8 from "../assets/album1/8.jpg";
import photo9 from "../assets/album1/2.jpg";

const photos = [
  [
    { id: 1, src: photo1, alt: "Photo 1" },
    { id: 2, src: photo2, alt: "Photo 2" },
    { id: 3, src: photo3, alt: "Photo 3" },
  ],
  [
    { id: 4, src: photo4, alt: "Photo 4" },
    { id: 5, src: photo5, alt: "Photo 5" },
    { id: 6, src: photo6, alt: "Photo 6" },
  ],
  [
    { id: 7, src: photo7, alt: "Photo 7" },
    { id: 8, src: photo8, alt: "Photo 8" },
    { id: 9, src: photo9, alt: "Photo 9" },
  ],
];

const Portfolio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handlePhotoClick = (id: number) => {
    setSelectedPhoto(id);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      const currentIndex = photos
        .flat()
        .findIndex((photo) => photo.id === selectedPhoto);
      const nextIndex = (currentIndex + 1) % photos.flat().length;
      setSelectedPhoto(photos.flat()[nextIndex].id);
    }
  };

  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      const currentIndex = photos
        .flat()
        .findIndex((photo) => photo.id === selectedPhoto);
      const prevIndex =
        (currentIndex - 1 + photos.flat().length) % photos.flat().length;
      setSelectedPhoto(photos.flat()[prevIndex].id);
    }
  };

  const currentPhoto = photos
    .flat()
    .find((photo) => photo.id === selectedPhoto);

  return (
    <motion.div
      className="portfolio-container"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="photo-grid">
        {photos.map((row, rowIndex) => (
          <div key={rowIndex} className="photo-row">
            {row.map((photo) => (
              <motion.div
                key={photo.id}
                className="photo-card"
                whileHover={{
                  scale: 1.2, // Increased hover scale
                  x: 10, // Subtle horizontal movement
                }}
                onClick={() => handlePhotoClick(photo.id)}
              >
                <img src={photo.src} alt={photo.alt} className="photo-image" />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen Photo */}
      {selectedPhoto !== null && currentPhoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="modal-image"
            />
            <div className="modal-navigation">
              <button className="modal-prev" onClick={goToPrevious}>
                &#8592; Previous
              </button>
              <button className="modal-next" onClick={goToNext}>
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Portfolio;
