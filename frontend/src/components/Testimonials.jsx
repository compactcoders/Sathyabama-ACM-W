import React, { useState, useRef, useEffect } from 'react';

import "./Navbar"
import { useNavigate } from 'react-router-dom';
import TestimonialCard from "./TestimonialCard";
import testimonials from '../data/TestimonialsData';
import '../styles/Testimonials.css';


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const cardWidth = 400; // Adjust this to match the actual width of your cards
      const offset = (slider.offsetWidth - cardWidth) / 2; // Center the active card
      slider.style.transform = `translateX(${-activeIndex * cardWidth + offset}px)`;
    }
  }, [activeIndex]);

  return (
    <section className="testimonials-container">
      <div className="header-row">
        <h2>What People Tell About Us</h2>
        <select className="dropdown-filter">
          <option value="Alumni">Alumni</option>
        </select>
      </div>

      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isActive={index === activeIndex} />
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button
          className={`prev-btn ${activeIndex === 0 ? 'invisible' : ''}`}
          onClick={handlePrev}
          aria-label="Previous"
          disabled={activeIndex === 0}
        >
          <span>&lt;</span>
        </button>

        <button
          className={`next-btn ${activeIndex === testimonials.length - 1 ? 'invisible' : ''}`}
          onClick={handleNext}
          aria-label="Next"
          disabled={activeIndex === testimonials.length - 1}
        >
          <span>&gt;</span>
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>

      <button
        style={{
          marginTop: '50px',
          visibility: activeIndex === testimonials.length - 1 ? 'visible' : 'hidden',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        className="experience-btn"
        onClick={() => navigate('/share-your-thoughts')}
      >
        Share your experience with us
      </button>
    </section>
  );
};

export default Testimonials;
