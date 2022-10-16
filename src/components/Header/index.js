import React from 'react';
import Nav from '../Nav';

const Header = () => {
    return (
        <div>
            <h2>
                <a data-testid="link" href="/">
                    Lernantino
                </a>
            </h2>
            <Nav></Nav>
        </div>
    );
};

export default Header;