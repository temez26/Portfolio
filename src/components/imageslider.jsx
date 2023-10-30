
import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "../style/imageslider.css";

// ImageSlider component for rendering an image slider with navigation controls
function ImageSlider({ images, links }) {
  // State for managing the current image index
  const [imageIndex, setImageIndex] = useState(0);

  // Function to show the next image in the slider
  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  // Function to show the previous image in the slider
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

 
  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {/* Skip link for image slider controls */}
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Slider content with images and corresponding links */}
        <div
          style={{
            width: `${images.length * 100}%`,
            height: "100%",
            display: "flex",
            transform: `translateX(-${imageIndex * (100 / images.length)}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {images.map(({ url, alt }, index) => (
            <a
              key={url}
              href={links[index]} // Use the link corresponding to the current image
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={imageIndex !== index}
              className="img-slider-img-link"
              style={{
                flex: `0 0 ${100 / images.length}%`,
                width: `${100 / images.length}%`,
              }}
            >
              <img src={url} alt={alt} className="img-slider-img" />
            </a>
          ))}
        </div>
      </div>
      {/* Button for viewing the previous image */}
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      {/* Button for viewing the next image */}
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      {/* Navigation dots for indicating the current image */}
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      {/* Anchor point after image slider controls */}
      <div id="after-image-slider-controls" />
    </section>
  );
}


export default ImageSlider;
