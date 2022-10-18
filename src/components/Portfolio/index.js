import React from 'react';
import Project from '../Project';
import streamConnect from '../../assets/large/projects/streamConnect.png'
import giftConnect from '../../assets/large/projects/giftConnect.png'
import runBuddy from '../../assets/large/projects/runBuddy.png'
import kottongPortfolio from '../../assets/large/projects/kottongPortfolio.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Stream Connect',
            deployLink: 'https://gatorhatur.github.io/stream-connect/',
            gitHubLink: 'https://github.com/gatorhatur/stream-connect',
            projectImg: streamConnect
        },
        {
            title: 'Gift Pilot',
            deployLink: 'https://gift-pilot.herokuapp.com/home',
            gitHubLink: 'https://github.com/gatorhatur/gift-pilot',
            projectImg: kottongPortfolio
        },
        {
            title: 'Kottong Portfolio',
            deployLink: 'https://maxkottong.github.io/Kottong-Portfolio/',
            gitHubLink: 'https://github.com/MaxKottong/Kottong-Portfolio',
            projectImg: giftConnect
        },
        {
            title: 'Run Buddy',
            deployLink: 'https://maxkottong.github.io/run-buddy/',
            gitHubLink: 'https://github.com/MaxKottong/run-buddy',
            projectImg: runBuddy
        }
    ];

    return (
        <div className="container portfolio my-5">
            <h1 id="portfolio">Portfolio</h1>
            <div className="projects row">
                {projects.map(project => {
                    return <Project key={projects.title} {...project} />
                })}
            </div>
        </div>
    );
};

export default Portfolio;