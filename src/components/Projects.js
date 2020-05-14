import React from "react"
import homeImg from '../styles/images/Scene-Home.svg'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects__header">
                <h3 className="projects__header--title">
                    My Work
                </h3>
                <p className="projects__header--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat esse minus molestias debitis, sint ullam libero ipsum iusto quod reiciendis quam sequi quae id blanditiis accusantium eligendi iste tempora nam?
                </p>
            </div>
            <img className="projects__img" src={homeImg} alt=""/>

            <div className="projects__project-list">

            </div>
        </section> 
    )
}

export default Projects
