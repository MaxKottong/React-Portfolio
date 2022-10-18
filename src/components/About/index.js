import React from 'react';
import profilePicture from '../../assets/small/logos/profilePicture.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/about.css'

function About() {
    return (
        <section className="my-5 about">
            <h1 id="about">About Me</h1>
            <img className="profilePicture" src={profilePicture} />
            <p>Lorem ipsum dolor nuash tyreth Lorem ipsum dolor nuash tyreth Lorem ipsum dolor nuash tyreth Lorem ipsum dolor nuash tyreth Lorem ipsum dolor nuash tyreth Lorem ipsum dolor nuash tyreth</p>
        </section>
    );
}

export default About;