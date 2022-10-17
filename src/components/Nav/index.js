import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    {pages.map((page) => (
                        <li
                            className={`mx-1 ${currentPage.name === page.name && `navActive`}`}
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
            </nav>
        </header>
    );
}

export default Nav;