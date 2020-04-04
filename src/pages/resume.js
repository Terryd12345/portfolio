import React from "react"
import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <>
      <Navbar />
      <section className="resume">
        <h1 className="resume--title">Resume</h1>
        <div className="resume__employment">
          <h2 className="resume__employment--title">Employment</h2>
          <div className="resume__items"></div>
        </div>
        <div className="resume__education">
          <h2 className="resume__education--title">Education</h2>
          <div className="resume__items"></div>
        </div>
      </section>
    </>
  )
}

export default Resume
