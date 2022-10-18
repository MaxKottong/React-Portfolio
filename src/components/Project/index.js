import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project(project) {
    const { title, deployLink, gitHubLink, projectImg } = project;

    return (
        <div className='col-sm-12 col-md-6'>
            <div className='card h-100'>
                <a className="card-link" href={deployLink} target="_blank">
                    <img className="card-img" src={projectImg} alt={title} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">View the repository <a href={gitHubLink} target="_blank">here:</a></p>
                </div>
            </div>
        </div>
    );
}

export default Project;