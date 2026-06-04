import { useState } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  // currentIndex holds the current index (always start at 0) variable for the showing img.
  // setCurrentIndex is used to change the current img
  const [currentIndex, setCurrentIndex] = useState(0);

  // img is in array with objects
  const images = [
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565218/imgTasteOfGreek4_y5xhis.jpg", alt: "Restaurant image 1" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565235/imgTasteOfGreek3_slpokp.jpg", alt: "Restaurant image 2" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565255/imgTasteOfGreek12_r5w8q9.jpg", alt: "Restaurant image 3" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565273/imgTasteOfGreek1_bskgjj.jpg", alt: "Restaurant image 4" },
  ];

  // Go to the prev img: prev=current index === 0 jump to the last img
  // ?=if/else go to last img or one step back — wrap around/looping slider
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); // wraps back to last image
  };

  // Go to next img: prev === images.length - 1 = go back to the first img.
  // ?=if/else go to prev+1=next
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); // wraps back to first image
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* getting the current img from [] array, React puts the right img-URL and alt text */}
        <img
          className="img-slide"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
      </div>

      {/* gets the prevSlide function */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>

      {/* gets the nextSlide function */}
      <button className="next" onClick={nextSlide}>&#10095;</button>

      <div className="slider-dots">
        {/*
          images.map()
               ↓
          a span is created per image
              ↓
          each span gets an index
              ↓
          index is used as:
            - key (unique identifier for each dot)
            - navigation to the right image
          _ means we don't care about the object, only the index
        */}
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;