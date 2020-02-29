import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import auth from "../styles/images/gifs/auth.gif"
import create from "../styles/images/gifs/create.gif"
import filter from "../styles/images/gifs/filter.gif"
import messaging from "../styles/images/gifs/messaging.gif"
import responsive from "../styles/images/gifs/responsive.gif"
import save from "../styles/images/gifs/save.gif"

const Projects = () => {
  const [currGif, setCurrGif] = useState(auth)
  const [currTab, setCurrTab] = useState("auth-tab")

  const changeTab = (tabName, gif) => {
    setCurrGif(gif)
    document
      .getElementById(tabName)
      .classList.add("projects__mysailboatfinder__gifs__tabs--active")
    document
      .getElementById(currTab)
      .classList.remove("projects__mysailboatfinder__gifs__tabs--active")
    setCurrTab(tabName)
  }

  return (
    <div id="projects" className="projects">
      <div className="projects__mysailboatfinder">
        <a
          className="projects__mysailboatfinder--header"
          href="https://mysailboatfinder.com"
          target="__blank"
        >
          <p>MySailBoatFinder.com</p>
        </a>
        <a href="https://github.com/tden123/sailboat" target="__blank">
          <FontAwesomeIcon
            className="projects__mysailboatfinder--github"
            icon={faGithub}
          />
        </a>

        <p className="projects__mysailboatfinder--description">
          MySailboatFinder.com is an online marketplace that allows users to
          trade new and used sailboats. The application is built using{" "}
          <b>HTML</b>, <b>CSS/Sass</b> (Grid and Flexbox), <b>Javascript</b>{" "}
          (React with Redux for State Management) and on the backend,{" "}
          <b>NodeJS</b> (ExpressJS) with a cloud based <b>MongoDB</b> database
          (MongoDB Atlas). The application is hosted on a Ubuntu Linode running{" "}
          <b>NGINX</b>.
        </p>

        <div className="projects__mysailboatfinder__features">
          <p className="projects__mysailboatfinder__features--header">
            Features
          </p>
          <ul className="projects__mysailboatfinder__features--list">
            <li>Messaging</li>
            <li>
              Authentication and Authorization using Json Web Tokens (JWT)
            </li>
            <li>Save Posts</li>
            <li>CRUD</li>
            <li>Responsive Design</li>
          </ul>
          <div className="projects__mysailboatfinder__gifs">
            <div className="projects__mysailboatfinder__gifs__tabs">
              <button
                className="projects__mysailboatfinder__gifs__tabs--active"
                id="auth-tab"
                onClick={() => changeTab("auth-tab", auth)}
              >
                <p>Auth</p>
              </button>
              <button
                id="messaging-tab"
                onClick={() => changeTab("messaging-tab", messaging)}
              >
                <p>Messaging</p>
              </button>
              <button
                id="create-tab"
                onClick={() => changeTab("create-tab", create)}
              >
                <p>Create</p>
              </button>
              <button id="save-tab" onClick={() => changeTab("save-tab", save)}>
                <p>Save</p>
              </button>
              <button
                id="responsive-tab"
                onClick={() => changeTab("responsive-tab", responsive)}
              >
                <p>Responsive</p>
              </button>
              <button
                id="filter-tab"
                onClick={() => changeTab("filter-tab", filter)}
              >
                <p>Filter</p>
              </button>
            </div>
            <img
              src={currGif}
              alt={`${currGif} gif`}
              className={`projects__mysailboatfinder__gifs--${currGif}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
