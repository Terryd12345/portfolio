import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Terence Denning</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <section className="home">
      <div className="home__content">
        <div className="home__content--title">
          <h1 className="home__content--name">Terence Denning</h1>
          <h2 className="home__content--subtitle">
            I'm a Software Developer based in Melbourne, AU
          </h2>
        </div>

        <div className="home__content__social">
          <a
            href="https://www.linkedin.com/in/terence-denning-0a89a7122/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="home__content__social--linkedin"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://github.com/tden123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="home__content__social--github"
              icon={faGithub}
            />
          </a>
        </div>
        <div className="home__navigation">
          <Link to="/projects" className="home__content--btn">
            Projects
          </Link>
          <Link to="/resume" className="home__content--btn">
            Resume
          </Link>
          <Link to="/contact" className="home__content--btn">
            Contact
          </Link>
        </div>
      </div>
      <div className="home__line home__line--1"></div>
      <div className="home__line home__line--2"></div>
      <div className="home__line home__line--3"></div>
      <div className="home__line home__line--4"></div>
    </section>
  </React.Fragment>
)
