import React from "react"
import Home from "../components/Home"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"



export default () => {
  return (
    <>  
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terence Denning</title>
        <link rel="canonical" href="https://terencedenning.com"/>
        <meta name="description" content="Software Developer from Melbourne, Australia" />
      </Helmet>
      <main className="app">
        <Navbar />
        <Home />
        <Services />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
};

