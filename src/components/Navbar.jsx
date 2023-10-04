import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "../style/darkmodebutton.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.darkMode
        ? "background: radial-gradient(circle, rgba(45,62,125,1) 0%, rgba(27,30,135,1) 50%);"
        : "radial-gradient(circle, rgba(0, 4, 45, 1) 0%, rgba(0, 0, 0, 1) 100%)"};
    color: ${(props) => (props.darkMode ? "#fff" : "#fff")};
  }
`;

const NavbarContainer = styled.header`
  // Your styling here
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode !== null ? JSON.parse(storedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Invert the darkMode state
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <NavbarContainer className={`navbar ${darkMode ? "dark" : "light"}`}>
        <nav className="">
          <header>
            <nav className="">
              <div className="container">
                <section className="flex-start">
                  <a id="title">Bonkkers</a>
                </section>
                <section className="darkmode-icon">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="switch"
                    onChange={toggleDarkMode}
                    checked={darkMode}
                  />
                </section>

                <section className="flex-end">
                  <a className="right">Home</a>
                  <a>Gallery</a>
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
