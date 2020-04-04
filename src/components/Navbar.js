import React from "react"

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="navbar--item">
        Home
      </a>
      <a href="/projects" className="navbar--item">
        Projects
      </a>
      <a href="/resume" className="navbar--item">
        Resume
      </a>
      <a href="/contact" className="navbar--item">
        Contact
      </a>
    </div>
  )
}

export default Navbar
