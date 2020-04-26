import React from "react"
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="#home">
          <h1>Terence Denning</h1>
        </Link>
      </div>
      <div className="navbar__nav">
      <Link to="#about">About</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
