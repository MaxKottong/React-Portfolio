import React, { useState } from 'react';
import Nav from '../Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
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
            >
            </Nav>
        </div>
    );
};

export default Header;