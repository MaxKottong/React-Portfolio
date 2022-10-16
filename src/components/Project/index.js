import React, { useState } from 'react';

const Project = ({ category }) => {
    const [projects] = useState([
        {
            title: 'Stream Connect',
            deployLink: 'https://gatorhatur.github.io/stream-connect/',
            gitHubLink: 'https://github.com/gatorhatur/stream-connect',
            projectImg: ''
        },
        {
            title: 'Gift Pilot',
            deployLink: 'https://gift-pilot.herokuapp.com/home',
            gitHubLink: 'https://github.com/gatorhatur/gift-pilot',
            projectImg: ''
        },
        {
            title: 'Kottong Portfolio',
            deployLink: 'https://maxkottong.github.io/Kottong-Portfolio/',
            gitHubLink: 'https://github.com/MaxKottong/Kottong-Portfolio',
            projectImg: ''
        },
        {
            title: 'Run Buddy',
            deployLink: 'https://maxkottong.github.io/run-buddy/',
            gitHubLink: 'https://github.com/MaxKottong/run-buddy',
            projectImg: ''
        }
    ]);

    const [currentProject, setCurrentProject] = useState();

    return (
        <div>
            <div className="flex-row">
                {projects.map((image, i) => (
                    <img
                        src={require(`../../assets/small/projects/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;