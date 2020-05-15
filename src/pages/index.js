import React from "react"
import Home from "../components/Home"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"

export default () => {

  return (
    <main className="app">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

