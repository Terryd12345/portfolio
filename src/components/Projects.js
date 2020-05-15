import React from "react"
import homeImg from '../styles/images/Scene-Home.svg'
import Project from './Project';
import AboutImg from '../styles/images/about.jpg';
import OpendropImg from '../styles/images/opendrop.png'
import MiscImg from '../styles/images/misc.png'
import WpFilterImg from '../styles/images/wpfilter.png'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects__header">
                <h3 className="projects__header--title">
                    My Work
                </h3>
                <p className="projects__header--description">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius tempore dolore sint, reprehenderit id vitae deserunt ex, distinctio, impedit natus repellendus. Voluptatem temporibus, nemo porro eaque ad cupiditate ea aut?                </p>
            </div>
            <img className="projects__img" src={homeImg} alt=""/>

            <div className="projects__project-list">
                <Project 
                    img={OpendropImg} 
                    title={"OpenDrop"} 
                    githubLink={"https://github.com/jdber1/opendrop"} 
                    description={"Opendrop is an opensource pendant drop tensiometry software that is used by researchers to determine the interfacial surface tension of various liquids"} 
                />
                <Project 
                    img={WpFilterImg} 
                    title={"Postcode Filter"} 
                    githubLink={"https://github.com/tden123/postcode-delivery-options"} 
                    description={"Postcode Filter is a custom WordPress plugin that was developed for a client that required the ability to aggregate a large number of delivery locations based upon post code inputs"} 
                />
                <Project 
                    img={MiscImg} 
                    title={"MISC"} 
                    githubLink={"https://github.com/tden123/misc2"} 
                    description={"This was the original University of Melbourne Information Security Club website and was developed in order to increase brand recognition and link to social media accounts"} 
                />
            </div>
        </section> 
    )
}

export default Projects
