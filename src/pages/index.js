import React from "react"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Watermark from "../components/Watermark"
import SplashNav from "../components/SplashNav"

export default () => {

  return (
    <main className="app">
      <Navbar />
      <Watermark />
      <SplashNav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

