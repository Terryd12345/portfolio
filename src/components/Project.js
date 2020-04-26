import React from 'react'

const Project = (props) => {
    const { image, description, title } = props;
    return (
        <div className='project'>
            <div className="project__image">
                <img src={image} alt="project"/>
            </div>
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
        </div>
    )
}

export default Project;