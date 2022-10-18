import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/nav.css'

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <header className="d-flex px-1 headerNav">
            <nav className="navbar navbar-expand-lg row navbar-dark">
                <div className="">
                    <ul className="navbar-nav ml-auto">
                        {pages.map((page) => (
                            <li
                                className={`nav-item ${currentPage.name === page.name}`}
                                key={page.name}
                            >
                                <span onClick={() => {
                                    setCurrentPage(page);
                                }}
                                >
                                    {capitalizeFirstLetter(page.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;