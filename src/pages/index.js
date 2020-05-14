import React from "react"
import Home from "../components/Home"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"

export default () => {

  return (
    <main className="app">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

