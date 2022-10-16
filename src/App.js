import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
    const [categories] = useState([
        { name: 'about' },
        { name: 'portfolio' },
        { name: 'contact' },
        { name: 'resume' }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                <Portfolio></Portfolio>
            </main>
        </div>
    );
}

export default App;
