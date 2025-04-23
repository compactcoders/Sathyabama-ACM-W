import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/acm-logo.jpg";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to check if the link is active
    const isActiveLink = (path) => location.pathname === path ? "active" : "";

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {location.pathname !== "/" && (
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                )}
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="burger-menu" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} size="lg" />
            </div>

            <div className={`navbar-right ${isMobileMenuOpen ? "open" : ""}`}>
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className={isActiveLink("/")}>Home</Link>
                    </li>
                    <li>
                        <Link to="/pillars" className={isActiveLink("/pillars")}>Our Women Pillars</Link>
                    </li>
                    <li>
                        <Link to="/core-team" className={isActiveLink("/core-team")}>Core Team</Link>
                    </li>
                    <li>
                        <Link to="/membership" className={isActiveLink("/membership")}>Membership</Link>
                    </li>
                    <li>
                        <Link to="/events" className={isActiveLink("/events")}>Events</Link>
                    </li>
                    
                    
                    
                    <li>
                        <Link to="/initiatives" className={isActiveLink("/initiatives")}>Initiatives</Link>
                    </li>
                    <li>
                        <Link to="/testimonials" className={isActiveLink("/testimonials")}>Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className={isActiveLink("/blogs")}>Blogs</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell} size="lg" className="notification-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
