import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
        props.darkMode
            ? 'radial-gradient(circle, rgba(0,4,45,1) 0%, rgba(0,0,0,1) 100%)'
            : 'radial-gradient(circle, rgba(142,142,142,1) 0%, rgba(96,96,96,1) 100%)'};
    color: ${(props) => (props.darkMode ? '#fff' : '#000')};
  }
`;

const NavbarContainer = styled.header`
  // Your styling here
`;

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : true;
    });

    const [isMoonVisible, setIsMoonVisible] = useState(() => {
        const storedIsMoonVisible = localStorage.getItem('isMoonVisible');
        return storedIsMoonVisible ? JSON.parse(storedIsMoonVisible) : true;
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setIsMoonVisible(!isMoonVisible);
    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('isMoonVisible', JSON.stringify(isMoonVisible));
    }, [isMoonVisible]);

    return (
        <>
            <GlobalStyle darkMode={darkMode} />
            <NavbarContainer className={`navbar ${darkMode ? 'dark' : 'light'}`}>
                <nav className="">
                    <header>
                        <nav className="">
                            <div className="container">
                                <section className="flex-start">
                                    <a id="title">Bonkkers</a>
                                </section>
                                <section className="darkmode-icon">
                                    {isMoonVisible ? (
                                        <FaMoon
                                            className={`moon-icon`}
                                            onClick={toggleDarkMode}
                                        />
                                    ) : (
                                        <FaSun
                                            className={`sun-icon`}
                                            onClick={toggleDarkMode}
                                        />
                                    )}
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
