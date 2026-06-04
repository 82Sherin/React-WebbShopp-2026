import { useState } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
   // currentIndex holds the current index (alway start at 0) variable for the showing img. 
  // setCurrentIndex is used to change the current img

  const images = [ //img is in array with obect
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565218/imgTasteOfGreek4_y5xhis.jpg", alt: "Restaurant image 1" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565235/imgTasteOfGreek3_slpokp.jpg", alt: "Restaurant image 2" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565255/imgTasteOfGreek12_r5w8q9.jpg", alt: "Restaurant image 3" },
    { src: "https://res.cloudinary.com/dw4ga3iot/image/upload/v1780565273/imgTasteOfGreek1_bskgjj.jpg", alt: "Restaurant image 4" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); // wraps back to last image
  };
  // Go to the before/prev img funktion: prev=current index  === 0 jump to the last img ?=if/else go to last img or one step back
  // wrap around/looping slider

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); // wraps back to first image
  };
  // Go to next img with prev function: prev === images.length -1= go back to the first img.
  //  ?=if/else go to prev+1=next

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          className="img-slide"
          src={images[currentIndex].src} // getting the current img from [] array, React put the right img-URL
          alt={images[currentIndex].alt} //same but the text. 
        />
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button> // get the function prevSlide
      <button className="next" onClick={nextSlide}>&#10095;</button> // get the function nextSlide
      <div className="slider-dots">
        {images.map((_, index) => ( // loop through all the img. _= means we do not care about the object we only use index.
        // map make a dot for every img 
          <span
            key={index} // make a key for every dot in the array ex key 0, key 1 very dot has there key. 
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
            /*images.map()
                 ↓
            en span skapas per bild
                ↓
          varje span får ett index
                ↓
           index används som:
              - key
              - navigation till rätt bild*/
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;