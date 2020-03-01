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
      <a href="#home" className="sidebar__home">
        <FontAwesomeIcon icon={faHome} />
        <p>Home</p>
      </a>
      <a href="#about" className="sidebar__about">
        <FontAwesomeIcon icon={faAddressCard} />
        <p>About</p>
      </a>
      <a href="#projects" className="sidebar__projects">
        <FontAwesomeIcon icon={faProjectDiagram} />
        <p>Projects</p>
      </a>
      <a href="#contact" className="sidebar__resume">
        <FontAwesomeIcon icon={faFile} />
        <p>Contact</p>
      </a>
    </div>
  )
}

export default Sidebar
