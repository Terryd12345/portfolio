import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Projects from "../components/Projects"

export default () => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Terence Denning</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Navbar />
    <Home />
    <Projects />
  </React.Fragment>
)
