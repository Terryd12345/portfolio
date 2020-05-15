import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Project = (props) => {
    const { img, title, description, githubLink } = props;
    return (
        <div className='project'> 
            <div className="project__overlay">
                <div className="project__overlay__icons">
                    <a 
                        href={githubLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>  
                </div>    
            </div>
            <img class="project--img" src={img} alt="project"/>
            <h3 className="project--title">{title}</h3>
            <p className="project--description">{description}</p>
        </div>
    )
}

export default Project;