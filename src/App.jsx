import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/body.jsx";
import "./style/body.css";
import "./style/Footer.css";
import "./style/Navbar.css";
import "./style/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
