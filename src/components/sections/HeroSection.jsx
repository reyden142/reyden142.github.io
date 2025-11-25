import React from "react";
import CubeGif from "../../assets/gif/Cube.gif";
import RJLogo from "../../assets/svg/RJ.svg"; // Import RJ.svg
import "../../styles/HeroSection.css"; // Corrected import path

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="hero-section"
        >
            <img
                src={CubeGif}
                alt="Cube Background"
                className="cube-background"
            />
            <div className="hero-content">
                <img
                    src={RJLogo}
                    alt="RJ Logo"
                    className="hero-logo"
                />
            </div>
        </section>
    );
}