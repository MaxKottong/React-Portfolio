import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio({ portfolio }) {
    const { title, deployLink, gitHubLink, projectImg } = portfolio;

    return (
        <section>
            <h1>Portfolio</h1>
        </section>
    );
}

export default Portfolio;