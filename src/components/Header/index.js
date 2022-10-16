import React, { useState } from 'react';
import Nav from '../Nav';

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <div>
            <h2>
                <a data-testid="link" href="/">
                    Lernantino
                </a>
            </h2>
            <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            >
            </Nav>
        </div>
    );
};

export default Header;