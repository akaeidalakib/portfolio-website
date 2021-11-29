import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from './About/About';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Projects/>
            <Contact></Contact>
        </div>
    );
};

export default Home;