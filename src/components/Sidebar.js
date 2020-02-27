import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faFile,
  faProjectDiagram,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a title="Home" href="#home" className="sidebar__home">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a title="About" href="#about" className="sidebar__about">
        <FontAwesomeIcon icon={faAddressCard} />
      </a>
      <a title="Resume" href="#resume" className="sidebar__resume">
        <FontAwesomeIcon icon={faFile} />
      </a>
      <a title="Projects" href="#projects" className="sidebar__projects">
        <FontAwesomeIcon icon={faProjectDiagram} />
      </a>
    </div>
  )
}

export default Sidebar
