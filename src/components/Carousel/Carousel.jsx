import React, { useState } from "react";
import unsplash1 from "../../assets/images/unsplash1.png";
import unsplash2 from "../../assets/images/unsplash2.png";
import unsplash3 from "../../assets/images/unsplash3.png";
import "./Carousel.css";

const Carousel = () => {
  const images = [unsplash1, unsplash2, unsplash3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;