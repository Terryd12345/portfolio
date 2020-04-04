import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar--item">
        Home
      </Link>
      <Link to="/projects" className="navbar--item">
        Projects
      </Link>
      <Link to="/resume" className="navbar--item">
        Resume
      </Link>
      <Link to="/contact" className="navbar--item">
        Contact
      </Link>
    </div>
  )
}

export default Navbar
