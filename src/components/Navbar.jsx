
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "../style/darkmodebutton.css";

// Global styles for dark mode
const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.darkMode
        ? "background: rgb(0,3,34);"
        : "radial-gradient(circle, rgba(0,3,34,1) 0%, rgba(0,0,0,1) 100%);"};
    color: ${(props) => (props.darkMode ? "#fff" : "#fff")};
  }
`;

// Styling for the navbar container
const NavbarContainer = styled.header`
  // Your styling here
`;

// Navbar component for rendering the navigation bar with dark mode toggle
const Navbar = () => {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode !== null ? JSON.parse(storedDarkMode) : true;
  });

  // Function for toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save dark mode state to local storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  
  return (
    <>
      {/* SVG for decorative wave */}
      <div className="wawe1">
        {/* SVG path for the wave */}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Paths for creating the wave effect */}
          {/* Add your path details here */}
        </svg>
      </div>
      {/* Global styles for managing dark mode */}
      <GlobalStyle darkMode={darkMode} />
      {/* Container for the navbar */}
      <NavbarContainer className={`navbar ${darkMode ? "dark" : "light"}`}>
        {/* Navbar content */}
        <nav className="">
          <header>
            <nav className="container2">
              <div className="container">
                <section className="flex-start">
                  {/* Logo or title for the navbar */}
                  <a id="title">Bonkkers</a>
                </section>

                <section className="flex-end">
                  {/* Dark mode toggle switch */}
                  <section className="darkmode-icon">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="switch"
                      onChange={toggleDarkMode}
                      checked={darkMode}
                    />
                  </section>
                  {/* Menu toggle button for mobile view */}
                  <div className="menu-button">
                    <input
                      type="checkbox"
                      id="menu-toggle"
                      className="menu-toggle"
                    />
                    <label htmlFor="menu-toggle" className="menu-icon">
                      &#9776;
                    </label>
                    {/* Menu items */}
                    <div className="menu">
                      <a className="right">Home</a>
                      <a>Gallery</a>
                    </div>
                  </div>
                  {/* Links for larger screens */}
                  <div className="large-screen-links">
                    <a className="right">Home</a>
                    <a>Gallery</a>
                  </div>
                </section>
              </div>
            </nav>
          </header>
        </nav>
      </NavbarContainer>
    </>
  );
};


export default Navbar;
