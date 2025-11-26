import React from 'react';
import ThreeLines from '../assets/svg/three-lines.svg';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <img src={ThreeLines} alt="Menu" className="hamburger-icon" />
        </div>
    );
};

export default HamburgerMenu;
