// src/pages/Pillars.jsx or src/components/Pillars.jsx

import React, { useEffect } from "react";
import { pillarsData } from "../data/pillarsData";
import "../styles/Pillars.css";

const Pillars = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".pillar-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="pillars-page">
      <h2 className="pillars-heading">Our Pillars</h2>
      {pillarsData.map((pillar, index) => (
        <div
          key={index}
          className={`pillar-card ${index % 2 === 0 ? "left" : "right"}`}
        >
          <img
            src={pillar.image}
            alt={pillar.name}
            className="pillar-image"
          />
          <div className="pillar-content">
            <h3 className="pillar-name">{pillar.name}</h3>
            <p className="pillar-title">{pillar.title}</p>
            <p className="pillar-description">{pillar.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pillars;
