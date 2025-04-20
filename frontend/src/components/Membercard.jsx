import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const MemberCard = ({ name, role, tagline, imageUrl, instagramUrl, linkedinUrl }) => (
  <div className="member-card">
    <img src={imageUrl} alt={`${name}'s profile`} className="profile-pic" />
    <div className="member-info">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{tagline}</p>
      <div className="social-links">
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default MemberCard;
