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
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li className="dropdown">
                        <button className="dropdown-button" onClick={toggleDropdown}>Events</button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>Monthly Events</Link></li>
                                <li><Link to="/mega-events" onClick={() => setIsMobileMenuOpen(false)}>Mega Events</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/core-team" onClick={() => setIsMobileMenuOpen(false)}>Core Team</Link></li>
                    <li><Link to="/membership" onClick={() => setIsMobileMenuOpen(false)}>Membership</Link></li>
                    <li><Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link></li>
                    <li><Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
                    <li>
                        <FontAwesomeIcon icon={faBell} size="lg" className="notification-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
