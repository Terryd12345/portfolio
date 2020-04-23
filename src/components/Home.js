import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
  return (
    <div className="home">
      <h2 className="home__title">Software Developer</h2>
      <h3 className="home__subtitle">Melbourne, AU</h3>
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/terence-denning-0a89a7122/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="home__social--linkedin"
            icon={faLinkedin}
          />
        </a>
        <a
          href="https://github.com/tden123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="home__social--github" icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default Home
