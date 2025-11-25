import React from "react";
import RJLogo from "../assets/svg/RJ.svg"; // Import the SVG as a component

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Contacts", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black z-50 p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#hero" className="flex items-center">
                    <img src={RJLogo} alt="RJ Logo" className="h-10 w-auto" />
                </a>
                <ul className="flex space-x-6 text-gray-400">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
