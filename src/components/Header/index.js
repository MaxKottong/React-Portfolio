import React, { useState } from 'react';
import Nav from '../Nav';

const Header = () => {
    const [pages] = useState([
        { name: 'about' },
        { name: 'portfolio' },
        { name: 'contact' },
        { name: 'resume' }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const [contactSelected, setContactSelected] = useState(false);

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