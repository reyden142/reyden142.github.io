// --- src/components/Navbar.jsx (Required Fix) ---
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HoverMenu from "./HoverMenu";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        // Use a container for the hover event listeners
        <div
            // Add a class that encompasses the entire header/hover area
            className="navbar-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The standard visible navbar that contains the hamburger menu */}
            <nav className="fixed top-0 left-0 w-full z-10 p-4 flex justify-center">
                <HamburgerMenu />
            </nav>

            {/* CRITICAL FIX: Render HoverMenu ALWAYS, let CSS control visibility */}
            <HoverMenu isVisible={isHovered} />
        </div>
    );
}