import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Terence Denning</h1>
      <h2 className="home__subheader">I build software for the web</h2>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/terence-denning-0a89a7122/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/tden123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="home__navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#home">Contact</a>
      </div>
    </div>
  )
}

export default Home
