import React from "react"
import Image from '../styles/images/pc.jpg';
import Project from '../components/Project';


const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects__content">
                <h2>Projects</h2>
                <div className="projects__projects">
                    <Project 
                        image={Image} 
                        title={"Testing"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore numquam temporibus commodi at eum impedit sint et porro blanditiis."}
                    />
                    <Project 
                        image={Image} 
                        title={"Testing"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore numquam temporibus commodi at eum impedit sint et porro blanditiis."}
                    />
                    <Project 
                        image={Image} 
                        title={"Testing"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore numquam temporibus commodi at eum impedit sint et porro blanditiis."}
                    />
                    
                </div>
            </div>
        </section> 
    )
}

export default Projects
