import React from 'react';
import github from '../../assets/small/logos/GitHub-Mark-64px.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Project(project) {
    const { title, deployLink, gitHubLink, projectImg } = project;

    return (
        <div className='position-relative'>
            <div className='position-absolute top-50'>
                <h1><a href={deployLink} target='_blank' rel='noreferrer'>{title}</a></h1>
            </div>
            <a href={gitHubLink} target='_blank' rel='noreferrer'><img src={github} className='position-absolute top-0 start-100' alt='github logo'></img></a>
            <img className='m-3 shadow' src={projectImg} alt={title} height='200px'></img>
        </div>
    );
}

export default Project;