import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span>S</span>ourab
                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">about</NavLink>
                        </li>
                        <li>
                            <NavLink to="services">services</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="/"
                                target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank">
                                <i className="fab fa-youtube-square"></i>
                            </a>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <span onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <span><i className="fas fa-bars"></i></span>
                        </span>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
        </>
    );
};

export default Navbar;