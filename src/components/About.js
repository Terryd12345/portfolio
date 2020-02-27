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
            Hello, my name is Terence. I am a <b>Software Developer</b> from
            Melbourne, Australia. I graduated from the University of Melbourne
            with a <b>Bachelor of Science (Software and Computer Systems)</b>.
            During my degree I spent summers and winters working on an open
            source application{" "}
            <a
              className="about__description--opendrop"
              href="https://github.com/jdber1/opendrop"
              target="__blank"
            >
              OpenDrop
            </a>{" "}
            for the Department of Chemical Engineering. I was also involved in
            the <b>University of Melbourne Information Security Club</b> where I
            volunteered as a commitee member, helping run weekly events as well
            as developing the original club{" "}
            <a
              className="about__description--misc"
              href="https://umisc.herokuapp.com"
              target="__blank"
            >
              website
            </a>
            .
          </p>
          <br />
          <p>
            Since completing my degree, I have shifted my focus toward{" "}
            <b>Web Development</b> as that is my true passion. I am primarily
            focused on developing my skills in <b>HTML</b>, <b>CSS</b>,{" "}
            <b>Javascript</b>, <b>React</b> and <b>NodeJS</b>. I have an
            interest in everything web related from digital marketing, design,
            product development, security to software engineering.{" "}
            <b>
              I aspire to be as close to a "full stack" developer as possible.
            </b>
          </p>
        </div>
      </div>
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
