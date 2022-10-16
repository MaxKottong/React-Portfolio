import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <About></About>
            </main>
        </div>
    );
}

export default App;
