import React from 'react';
import linkedIn from '../../assets/small/logos/LI-In-Bug.png'
import gitHub from '../../assets/small/logos/GitHub-Mark-64px.png'

const Footer = () => {
    return (
        <div>
            <a href="google.com" target="_blank"><img src={linkedIn} width="75" height="64" alt="LinkedIn logo" /></a>
            <a href="google.com" target="_blank"><img src={gitHub} alt="GitHub logo" /></a>
        </div>
    )
}

export default Footer;