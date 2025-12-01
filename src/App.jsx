import React from "react";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
