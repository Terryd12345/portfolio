import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__description">
        <div className="about__description--header">About Me</div>
        <div className="about__description--content">
          <p>
            Hello, my name is Terence I am a software developer from Melbourne,
            Australia. I am primarily focused on the web stack with an emphasis
            on HTML, CSS, Javascript, React and NodeJS.
          </p>
          <br />
          <p>
            I am a full stack developer with an interest in everything from
            digital marketing, design, product development and software
            engineering.
          </p>
        </div>
      </div>
      <div className="about__img"></div>
      <div className="about__skills">
        <FontAwesomeIcon className="about__skills--html" icon={faHtml5} />
        <FontAwesomeIcon className="about__skills--css" icon={faCss3Alt} />
        <FontAwesomeIcon className="about__skills--js" icon={faJs} />
        <FontAwesomeIcon className="about__skills--react" icon={faReact} />
        <FontAwesomeIcon className="about__skills--node" icon={faNode} />
      </div>
    </div>
  )
}

export default About
