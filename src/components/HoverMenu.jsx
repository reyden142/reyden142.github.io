import React, { useState } from "react";
import "../styles/HoverMenu.css"; // Update the import path

export default function HoverMenu() {
    const [isHovered, setIsHovered] = useState(false);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About Me", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Achievements", href: "#achievements" },
    ];

    return (
        <div
            className="hover-menu-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* Hamburger Icon */}
                <div className="hamburger-icon-wrapper">
                    <svg
                        className="hamburger-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </div>

                {/* Hover Menu */}
                <div
                    className={`hover-menu-overlay ${isHovered ? "is-hovered" : ""}`}
                >
                    <ul className="hover-menu-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsHovered(false)}
                                    className="hover-menu-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
