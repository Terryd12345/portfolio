import React from "react"

const Project = props => {
  const { img, title, tech, description, siteLink, githubLink } = props

  return (
    <div className="project">
      <img className="project--img" src={img} alt="project" />
      <div className="project__content">
        <h2 className="project__content--title">{title}</h2>
        <p className="project__content--description">{description}</p>
        <p className="project__content--tech">{tech}</p>
        <div className="project__links">
          <a href={siteLink} target="_blank" className="project__links--link">
            Visit Site
          </a>
          <a href={githubLink} target="_blank" className="project__links--link">
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
