import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {
    const [pages] = useState([
        { name: 'about' },
        { name: 'portfolio' },
        { name: 'contact' },
        { name: 'resume' }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const [contactSelected, setContactSelected] = useState(false);

    function Page() {

        const renderPage = () => {
            switch (currentPage.name) {
                case 'about':
                    return <About />;
                case 'portfolio':
                    return <Portfolio />;
                case 'contact':
                    return <Contact />;
                case 'resume':
                    return <Resume />;
                default:
                    return <About />;
            }
        }
    }

    return (
        <div>
            <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
            <main>
                {!contactSelected ? (
                    <>
                        {Page({ currentPage })}
                    </>
                ) : (
                    <Contact />
                )}
            </main>
        </div>
    );
};

export default App;