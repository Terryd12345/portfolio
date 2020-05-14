import React from 'react';


const Project = (props) => {
    const { img, title, description } = props;
    return (
        <div className='project'>
            <img class="project--img" src={img} alt="project"/>
            <h3 className="project--title">{title}</h3>
            <p className="project--description">{description}</p>
        </div>
    )
}

export default Project;