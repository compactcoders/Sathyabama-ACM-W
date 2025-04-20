import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import aboutVideo from "../assets/about-video.mp4";
import leftImage from "../assets/sist-removebg-preview.png";
import rightImage from "../assets/acm-logo-removebg-preview.png";


const HomePage = () => {
  return (
    <>
     {/* Hero Section */}
<section className="hero-section">
  <div className="hero-container">
    <div className="logo-left">
      <img src={leftImage} alt="ACM Logo" />
    </div>
    <div className="hero-text">
      <h1>
        ACM-W <span>SATHYABAMA</span> <br /> <span>STUDENT CHAPTER</span>
      </h1>
      <p>Empowering Women in Computing and Beyond</p>
    </div>
    <div className="logo-right">
      <img src={rightImage} alt="SIST Logo" />
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="about-section">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <h3>ACM-W Sathyabama </h3>
          <p>
          ACM-W (Association for Computing Machinery, Women) in Sathyabama is a student chapter of the global ACM-W organization, dedicated to supporting, empowering, and promoting women in computing within the college community. The chapter aims to create a supportive community for women in computing to connect, share experiences, and learn from each other.

Through various activities, ACM-W in Sathyabama provides opportunities for women to develop their technical skills, network with professionals, and learn about career opportunities in computing. Guest lectures by industry professionals and researchers, workshops and tutorials on various computing topics, hackathons and coding challenges, and mentorship programs are just a few examples of the events and activities organized by the chapter.

Furthermore, ACM-W in college offers leadership opportunities for students to develop their skills by taking on roles within the chapter, such as president, vice president, or event coordinator. By joining ACM-W, students can become part of a vibrant community that is passionate about promoting diversity and inclusion in computing, and supporting the advancement of women in the field.

          </p>
          <video src={aboutVideo} autoPlay loop controls playsInline className="about-video"></video>
        </div>
      </section>

      {/* Share Your Thoughts Section */}
      <section className="share-thoughts-section">
        <h2>Share Your Thoughts</h2>
        <p>We would love to hear your feedback! Your thoughts and suggestions help us improve and create a better experience for everyone.</p>
        <Link to="/share-your-thoughts">
          <button className="feedback-button">Click Here</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="contact-us">
        <h2>Contact Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:example@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>Copyright 2023 @ Sathyabama Institute of Science and Technology.</p>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
