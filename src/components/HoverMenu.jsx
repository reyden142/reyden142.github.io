// --- src/components/HoverMenu.jsx ---
import React from "react";
import '../styles/HoverMenu.css';
// Import your logo/image if it's a file
// import RjLogo from '../assets/images/rj-logo.png'; 

const HoverMenu = ({ isVisible }) => {
    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Contacts", href: "#contact" },
    ];

    return (
        // isVisible prop correctly toggles the 'visible' class
        <div className={`hover-menu ${isVisible ? 'visible' : ''}`}>

            <div className="menu-content">

                {/* 1. Placeholder for the animated Logo and Text */}
                <div className="center-content">
                    {/* Placeholder for the Glitch Logo/Image */}
                    <div className="rj-logo"></div>
                </div>

                {/* 2. The Main Navigation Links */}
                <ul className="flex space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                            // TailWind class used here is redundant if CSS in file is complete
                            // className="hover:text-white transition-colors duration-300" 
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default HoverMenu;