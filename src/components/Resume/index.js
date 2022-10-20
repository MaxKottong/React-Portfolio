import React from 'react';
import '../../assets/css/resume.css';

const Resume = () => {
    return (
        <div className="resume my-5">
            <h1 id="resume">Resume</h1>
            <hr />
            <p>Download my <a href="../../assets/small/resumePH.txt" download>resume</a></p>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}

export default Resume;