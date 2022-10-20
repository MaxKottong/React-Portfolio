import React from 'react';
import linkedIn from '../../assets/small/logos/LI-In-Bug.png'
import gitHub from '../../assets/small/logos/GitHub-Mark-64px.png'
import stackOverflow from '../../assets/small/logos/stackOverflow.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/max-kottong-027778213/" target="_blank"><img src={linkedIn} width="75" height="64" alt="LinkedIn logo" /></a>
            <a href="https://github.com/MaxKottong" target="_blank"><img src={gitHub} alt="GitHub logo" /></a>
            <a href="https://stackoverflow.com/users/19222944/max-kottong" target="_blank"><img src={stackOverflow} width="64" alt="Stackoverflow logo" /></a>
        </div>
    )
}

export default Footer;