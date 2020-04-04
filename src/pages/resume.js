import React from "react"
import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <>
      <Navbar />
      <section className="resume">
        <div className="resume__box">
          <div className="resume__content">
            <h1 className="resume--title">Resume</h1>
            <div className="resume__employment">
              <h2 className="resume__employment--title">Employment</h2>
              <div className="resume__items">
                <div className="resume__items--circle"></div>
                <div className="resume__item">
                  <h3 className="resume__item--title">Research Assistant</h3>
                  <h4 className="resume__item--dates">2017-2019</h4>
                  <p className="resume__item--description">
                    Developed a opensource tensiometry software for the
                    University of Melbourne Chemical Engineering Department
                  </p>
                </div>
              </div>
            </div>
            <div className="resume__education">
              <h2 className="resume__education--title">Education</h2>
              <div className="resume__items">
                <div className="resume__items--circle"></div>
                <div className="resume__item">
                  <h3 className="resume__item--title">
                    University of Melbourne
                  </h3>
                  <h4 className="resume__item--dates">2016-2020</h4>
                  <p className="resume__item--description">
                    Bachelor of Science (Computer Science)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
