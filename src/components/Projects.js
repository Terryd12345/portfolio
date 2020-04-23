import React from "react"
import Project from "./Project"
import Image from "../styles/images/pic1.jpg"
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faLinux,
} from "@fortawesome/free-brands-svg-icons"

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <Project
        title="MySailBoatFinder.com"
        description={"Some text"}
        githubLink={"https://github.com/tden123/sailboat.git"}
        webLink={"https://mysailboatfinder.com"}
        img={Image}
        logos={[faHtml5, faCss3, faJs, faReact, faNodeJs, faLinux]}
      />
    </div>
  )
}

export default Projects
