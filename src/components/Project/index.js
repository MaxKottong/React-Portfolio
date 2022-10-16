import React, { useState } from 'react';

const Project = ({ category }) => {
    const [projects] = useState([
        {
            title: '',
            deployLink: '',
            gitHubLink: '',
            projectImg: ''
        },
        {
            title: '',
            deployLink: '',
            gitHubLink: '',
            projectImg: ''
        },
        {
            title: '',
            deployLink: '',
            gitHubLink: '',
            projectImg: ''
        },
        {
            title: '',
            deployLink: '',
            gitHubLink: '',
            projectImg: ''
        }
    ]);
}

export default Project;