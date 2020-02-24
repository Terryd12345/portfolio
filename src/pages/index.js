import React from "react";
import { Helmet } from 'react-helmet';
import Home from "../components/Home";
import About from '../components/About';
import Projects from "../components/Projects";


export default () => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Terence Denning</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Home />
    <About />
    <Projects />
  </React.Fragment>
)
