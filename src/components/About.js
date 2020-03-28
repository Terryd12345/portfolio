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
    <section id="about" className="about">
      <article className="about__description">
        <h3 className="about__description--header">About Me</h3>
        <div className="about__description--content">
          <p>
            Hello, my name is Terence. I am a <b>Software Developer</b> from{" "}
            <b>Melbourne, Australia</b>. I have a Bachelors degree in{" "}
            <b>Computer Science</b> from the <b>University of Melbourne</b>. My
            passion is building software for the web. I work primarily with{" "}
            <b>HTML5</b>, <b>CSS3</b>, <b>Javascript</b>, <b>React</b> and{" "}
            <b>NodeJS</b>.
          </p>
          <br />
          <p>
            I'm always looking to expand my skill set and work on exciting{" "}
            <b>web related projects</b>. If you'd like to partner up on a
            project, please get in touch.
          </p>
        </div>
      </article>
      <article className="about__skills">
        <FontAwesomeIcon className="about__skills--html" icon={faHtml5} />
        <FontAwesomeIcon className="about__skills--css" icon={faCss3Alt} />
        <FontAwesomeIcon className="about__skills--js" icon={faJs} />
        <FontAwesomeIcon className="about__skills--react" icon={faReact} />
        <FontAwesomeIcon className="about__skills--node" icon={faNode} />
      </article>
    </section>
  )
}

export default About
