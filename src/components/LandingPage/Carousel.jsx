import React from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    { id: 1, src: "/assets/react.png", alt: "React" },
    { id: 2, src: "/assets/js.png", alt: "JavaScript" },
    { id: 3, src: "/assets/node.png", alt: "Node.js" },
    { id: 4, src: "/assets/python.png", alt: "Python" },
    { id: 5, src: "/assets/java3.png", alt: "Java" },
    { id: 6, src: "/assets/mongo.png", alt: "MongoDB" }, 
    { id: 7, src: "/assets/php.png", alt: "PHP" },
    { id: 8, src: "/assets/laravel.png", alt: "Laravel" },
    { id: 9, src: "/assets/canva.jpg", alt: "Canva" },
    { id: 10, src: "/assets/Ai.png", alt: "Illustrator" },
    { id: 11, src: "/assets/Id1.png", alt: "InDesign" },
  ];

  // Triple the images for perfect seamless looping
  const carouselItems = [...images, ...images, ...images];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {carouselItems.map((image, index) => (
          <div key={`${image.id}-${index}`} className="carousel-item">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;