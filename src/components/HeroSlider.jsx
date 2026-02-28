import { useState, useEffect } from "react";
import "./heroSlider.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
    title: "Fresh Groceries Delivered Fast",
    subtitle: "Farm fresh products at your doorstep."
  },
  {
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    title: "Healthy Living Starts Here",
    subtitle: "Fresh fruits & veggies everyday."
  },
  {
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650",
    title: "Best Quality, Best Price",
    subtitle: "Save more on every order."
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>

          {index === current && (
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>SHOP NOW</button>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <div className="arrow left" onClick={prevSlide}>❮</div>
      <div className="arrow right" onClick={nextSlide}>❯</div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;