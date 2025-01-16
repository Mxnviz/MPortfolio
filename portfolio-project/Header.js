import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for Header styles

const Header = () => {
    return (
        <header>
            <h1 className="portfolio-title">My Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;