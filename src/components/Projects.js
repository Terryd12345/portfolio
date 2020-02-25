import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Projects = () => {
  const [currGif, setCurrGif] = useState("auth")

  return (
    <div id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__mysailboatfinder">
          <a
            className="projects__mysailboatfinder--header"
            href="https://mysailboatfinder.com"
            target="__blank"
          >
            MySailBoatFinder.com
          </a>
          <a href="https://github.com/tden123/sailboat" target="__blank">
            <FontAwesomeIcon
              className="projects__mysailboatfinder--github"
              icon={faGithub}
            />
          </a>

          <p className="projects__mysailboatfinder--description">
            MySailboatFinder.com is an online marketplace that allows users to
            trade new and used sailboats. The application is built using HTML,
            CSS (Grid and Flexbox), Javascript (React with Redux for State
            Management) and on the backend, NodeJS (ExpressJS) with a cloud
            based MongoDB database (MongoDB Atlas). The application is hosted on
            a Ubuntu Linode running NGINX.
          </p>
          <div className="projects__mysailboatfinder__features">
            <p className="projects__mysailboatfinder__features--header">
              Features
            </p>
            <ul className="projects__mysailboatfinder__features--list">
              <li>Messaging</li>
              <li>Authentication and Authorization using JWT</li>
              <li>Save Posts</li>
              <li>CRUD</li>
              <li>Responsive Design</li>
            </ul>
            <div className="projects__mysailboatfinder__gifs">
              <div className="projects__mysailboatfinder__gifs__tabs">
                <button onClick={() => setCurrGif("auth")}>Auth</button>
                <button onClick={() => setCurrGif("messaging")}>
                  Messaging
                </button>
                <button onClick={() => setCurrGif("responsive")}>
                  Responsive
                </button>
                <button onClick={() => setCurrGif("create")}>Create</button>
                <button onClick={() => setCurrGif("save")}>Save</button>
                <button onClick={() => setCurrGif("filter")}>Filter</button>
              </div>
              <div
                className={`projects__mysailboatfinder__gifs--${currGif}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
