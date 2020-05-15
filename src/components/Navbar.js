import React from "react"

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#home">
          Terence Denning
        </a>
      </div>
      <div className="navbar__nav">
      <a href="#whyme" className="navbar__nav--item">Why Me?</a>
        <a href="#services" className="navbar__nav--item">Services</a>
        <a href="#projects" className="navbar__nav--item">Projects</a>
        <a href="#about" className="navbar__nav--item">About</a>
      </div>
      <div className="navbar__contact">
        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
