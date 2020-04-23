import React from "react";
import { Link } from 'gatsby';

export default () => (

  <div className="home">
    <div className="home__content">
      <h2>Software Developer</h2>
      <h3>Melbourne, AU</h3>
      <div className="home__navigation">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to='/contact'>
        <button className="home__contact">
          HIRE ME
      </button>
      </Link>

    </div>
  </div>

)

