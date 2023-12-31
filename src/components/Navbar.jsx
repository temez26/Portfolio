
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
     <div className="wawe1">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
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
