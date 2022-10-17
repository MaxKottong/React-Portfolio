import React, { useState } from 'react';
import Portfolio from '../Portfolio';
import placeHolder from '../../assets/small/projects/600.png'

const Project = () => {
    const projects = [
        {
            title: 'Stream Connect',
            deployLink: 'https://gatorhatur.github.io/stream-connect/',
            gitHubLink: 'https://github.com/gatorhatur/stream-connect',
            projectImg: placeHolder
        },
        {
            title: 'Gift Pilot',
            deployLink: 'https://gift-pilot.herokuapp.com/home',
            gitHubLink: 'https://github.com/gatorhatur/gift-pilot',
            projectImg: placeHolder
        },
        {
            title: 'Kottong Portfolio',
            deployLink: 'https://maxkottong.github.io/Kottong-Portfolio/',
            gitHubLink: 'https://github.com/MaxKottong/Kottong-Portfolio',
            projectImg: placeHolder
        },
        {
            title: 'Run Buddy',
            deployLink: 'https://maxkottong.github.io/run-buddy/',
            gitHubLink: 'https://github.com/MaxKottong/run-buddy',
            projectImg: placeHolder
        }
    ];

    return (
        <div>
            
        </div>
    );
};

export default Project;