import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = props => {
  const { title, description, webLink, githubLink, img, logos } = props

  const displayLogos = () => {
    if (!logos) return
    return logos.map(logo => {
      console.log(logo)
      return (
        <FontAwesomeIcon
          key={logo.iconName}
          icon={logo}
          className="project__content__builtwith--logo"
        />
      )
    })
  }

  return (
    <div className="project">
      <div className="project__img">
        <img src={img} alt="project" />
      </div>
      <div className="project__content">
        <h3 className="project__content--title">{title}</h3>
        <p className="project__content--description">{description}</p>
        <div className="project__content__builtwith">
          <h3 className="project__content__builtwith--title">Built with</h3>
          {displayLogos()}
        </div>
        <div className="project__content__links">
          <div className="project__content__links--link">
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__content--visit"
            >
              Visit
            </a>
          </div>
          <div className="project__content__links--link">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__content--github"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
