import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <React.Fragment>
    <div className="home">
      <h1 className="home__header">Terence Denning</h1>
      <h2 className="home__subheader">Software Engineer</h2>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/terence-denning-0a89a7122/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/tden123" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="home__navigation">
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  </React.Fragment>
)
