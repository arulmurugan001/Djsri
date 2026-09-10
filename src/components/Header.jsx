import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">

        <nav className="navbar container">

            

            <a
                href="#home"
                className="logo"
                aria-label="DJ Sri home"
            >

                <span className="logo-icon">
                    <i
                        className="fa-solid fa-headphones"
                        aria-hidden="true"
                    ></i>
                </span>

                <span>
                    DJ<span>SRI</span>
                </span>

            </a>


            

            <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks" onClick={() => setMenuOpen(false)}>

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#music">Music</a>
                </li>

                <li>
                    <a href="#videos">Videos</a>
                </li>

                <li>
                    <a href="#gallery">Gallery</a>
                </li>

                <li>
                    <a href="#services">Services</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>


            

            <a
                href="#contact"
                className="nav-button"
            >
                Book Me
            </a>


            

            <button
                type="button"
                className="menu-toggle"
                id="menuToggle"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="navLinks"
            >

                <i
                    className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
                    aria-hidden="true"
                ></i>

            </button>

        </nav>

    </header>
  );
}
