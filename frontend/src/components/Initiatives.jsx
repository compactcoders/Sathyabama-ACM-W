import React from "react";
import { initiativesData } from "../data/initiativesData";
import "../styles/Initiatives.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Initiatives = () => {
  return (
    <div className="initiatives-page">
      <h2 className="initiatives-heading">Our Initiatives</h2>
      {initiativesData.map((item, index) => (
        <motion.div
          className="initiative-section"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={index}
          variants={fadeInUp}
        >
          <img src={item.image} alt={item.name} className="initiative-img" />
          <div className="initiative-details">
            <h3 className="initiative-title">{item.name}</h3>
            <p className="initiative-date">{item.date}</p>
            <p className="initiative-description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Initiatives;
