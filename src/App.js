import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
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
            <Header></Header>
            <main>
                {!contactSelected ? (
                    <>
                        <About></About>
                    </>
                ) : (
                    <Contact></Contact>
                )}
            </main>
        </div>
    );
}

export default App;
