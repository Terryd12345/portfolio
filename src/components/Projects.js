import React from "react"
import homeImg from '../styles/images/Scene-Home.svg'
import Project from './Project';
import AboutImg from '../styles/images/about.jpg';

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
                <Project img={AboutImg} title={"Item1"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque tenetur dignissimos neque sed possimus id consequuntur. Saepe nostrum fugiat aliquid, eaque vel quis voluptatum autem corporis, doloremque dolore suscipit?"} />
                <Project img={AboutImg} title={"Item2"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque tenetur dignissimos neque sed possimus id consequuntur. Saepe nostrum fugiat aliquid, eaque vel quis voluptatum autem corporis, doloremque dolore suscipit?"} />
                <Project img={AboutImg} title={"Item3"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque tenetur dignissimos neque sed possimus id consequuntur. Saepe nostrum fugiat aliquid, eaque vel quis voluptatum autem corporis, doloremque dolore suscipit?"} />
            </div>
        </section> 
    )
}

export default Projects
