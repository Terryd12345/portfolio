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
                    img={OpendropImg} 
                    title={"OpenDrop"} 
                    siteLink={"https://joss.theoj.org/papers/81c283e1b9af1d3d0db6b2da1d60855e"}
                    githubLink={"https://github.com/jdber1/opendrop"}
                    technologies={['Python','OpenCV', 'PyGTK']}
                    description={"Opendrop is an opensource pendant drop tensiometry software that is used by researchers to measure interfacial surface tension"} 
                />
                <Project 
                    img={WpFilterImg} 
                    title={"Postcode Filter"} 
                    githubLink={"https://github.com/tden123/postcode-delivery-options"}
                    siteLink={"https://butchersstore.com.au/delivery/"} 
                    technologies={['PHP','WordPress', 'Javascript']}
                    description={"Postcode Filter is a custom WordPress plugin that was developed for a client that required the ability to aggregate a large number of delivery locations based upon post code inputs"} 
                />
                <Project 
                    img={SailboatImg}
                    title={"MySailboatFinder"}
                    siteLink={"https://www.mysailboatfinder.com"}
                    githubLink={"https://github.com/tden123/sailboat"}
                    technologies={['React', 'Redux', 'ExpressJS', 'Sass']}
                    description={"MySailboatFinder was a proof of concept for an online trading platform for sailboats"}
                />
                
                <Project 
                    img={MiscImg} 
                    title={"MISC"} 
                    githubLink={"https://github.com/tden123/misc2"} 
                    siteLink={"http://umisc.herokuapp.com/"}
                    technologies={['Ruby On Rails','MySQL', 'Heroku', 'MaterializeCSS']}
                    description={"This was the original University of Melbourne Information Security Club website and was developed in order to increase brand awareness and link to social media accounts"} 
                />
                
            </div>
        </section> 
    )
}

export default Projects
