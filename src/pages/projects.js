import React from "react"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import Pic1 from "../styles/images/gifs/auth.gif"

export const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="projects__box">
          <div className="projects__content">
            <h1 className="projects__content--title">My Projects</h1>
            <Project
              img={Pic1}
              title={"MySailboatFinder.com"}
              tech={
                "HTML5, CSS3, Sass, React, Redux, NodeJS, ExpressJS, Ubuntu, NGINX, MongoDB Atlas"
              }
              description={
                "MySailboatFinder is a web application that allows users to trade new and used sailboats."
              }
              siteLink={"https://mysailboatfinder.com"}
              githubLink={"https://github.com/tden123/sailboat"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
