import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Project = (props) => {
    const { img, title, description, githubLink, siteLink, technologies } = props;

    function displayTechnologies() {
        return technologies.map(tech => {
            return <span key={tech}>{tech}</span>
        })
    }

    return (
        <article className='project'> 
            <div className="project__overlay">
                <div className="project__overlay__content">
                    <div className="project__overlay__icons">
                    
                        { githubLink ? <a 
                            href={githubLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a> : <></> }
                        
                        { siteLink ? <a 
                            href={siteLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a> : <></> }  
                    </div>
                    <div className="project__overlay__tech">
                        { displayTechnologies() }
                    </div>
                </div> 
            </div>
            <img className="project--img" src={img} alt="project"/>
            <h3 className="project--title">{title}</h3>
            <p className="project--description">{description}</p>
        </article>
    )
}

export default Project;