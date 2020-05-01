import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Project = (props) => {
    const { image, description, title } = props;
    return (
        <div className='project'>
            <div className="project__image">
                <div className="project__image-overlay">
                    <div className="project__image-overlay--icons">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
                <img src={image} alt="project"/>
            </div>
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
        </div>
    )
}

export default Project;