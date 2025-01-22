import React, { useRef, useState } from "react";
import "./Carousel.css";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg",
];

const Carousel = () => {
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const imagesPerView = 4; // Number of images visible at a time

  const handleNext = () => {
    if (containerRef.current) {
      const maxScroll =
        (images.length / imagesPerView - 1) * containerRef.current.clientWidth;
      const newScrollLeft =
        Math.min(containerRef.current.scrollLeft + containerRef.current.clientWidth, maxScroll);
      containerRef.current.scrollLeft = newScrollLeft;
      setScrollIndex(Math.ceil(newScrollLeft / containerRef.current.clientWidth));
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const newScrollLeft = Math.max(
        containerRef.current.scrollLeft - containerRef.current.clientWidth,
        0
      );
      containerRef.current.scrollLeft = newScrollLeft;
      setScrollIndex(Math.floor(newScrollLeft / containerRef.current.clientWidth));
    }
  };

  return (
    <div className="carousel-container">
      {scrollIndex > 0 && (
        <button className="prev-btn" onClick={handlePrev}>
          Previous
        </button>
      )}
      <div className="image-container" ref={containerRef}>
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {scrollIndex < Math.floor(images.length / imagesPerView) && (
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default Carousel;
