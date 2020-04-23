import React from "react"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="#home">
          <h1 className="navbar__title">Terence Denning</h1>
        </a>
      </div>
      <div className="navbar__nav">
        <a href="#projects" className="navbar__item">
          Projects
        </a>
        <a href="#contact" className="navbar__item">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
