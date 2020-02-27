import React from "react"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#home" className="sidebar__about">
        <img src="https://img.icons8.com/dotty/80/000000/home.png" alt="home" />
      </a>
      <a href="#about" className="sidebar__about">
        <img src="https://img.icons8.com/ios/50/000000/about.png" alt="about" />
      </a>
      <a href="#resume" className="sidebar__resume">
        <img
          src="https://img.icons8.com/carbon-copy/100/000000/resume.png"
          alt="resume"
        />
      </a>
      <a href="#projects" className="sidebar__projects">
        <img
          src="https://img.icons8.com/wired/64/000000/group-of-projects.png"
          alt="projects"
        />
      </a>
    </div>
  )
}

export default Sidebar
