import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
