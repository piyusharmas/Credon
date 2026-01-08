import React from 'react'
import Hero from './hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccounts from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccounts />
            <Footer />
        </>
     );
}

export default HomePage;