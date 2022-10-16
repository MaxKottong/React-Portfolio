import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
    const { currentCategory } = props;

    return (
        <section>
            <Project />
        </section>
    );
}

export default Portfolio;