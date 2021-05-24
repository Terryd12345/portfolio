import React from "react"
import homeImg from '../styles/images/Scene-Home.svg'
import Project from './Project';
import SailboatImg from '../styles/images/sailboat.png';
import OpendropImg from '../styles/images/opendrop.png'
import MiscImg from '../styles/images/misc.png'
import WpFilterImg from '../styles/images/wpfilter.png'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects__header">
                <div>
                    <h2 className="projects__header--title section-header">
                        My Work
                    </h2>
                </div>
                
                <p className="projects__header--description">
                    Below is a list of different projects I have worked on. I have worked with a number of different technologies and frameworks. With a fundamental understanding of how technology works under the hood, I am able to quickly adapt to any unfamiliar technology or platform.
                </p>
            </div>
            <img className="projects__img" src={homeImg} alt=""/>

            <div className="projects__project-list">
                <Project 
                    img={WpFilterImg} 
                    title={"Postcode Filter"} 
                    githubLink={"https://github.com/tden123/postcode-delivery-options"}
                    siteLink={"https://butchersstore.com.au/delivery/"} 
                    technologies={['PHP','WordPress', 'Javascript']}
                    description={"Postcode Filter is a custom WordPress plugin that was developed for a client that required the ability to aggregate a large number of delivery locations based upon post code inputs"} 
                />
            </div>
        </section> 
    )
}

export default Projects
