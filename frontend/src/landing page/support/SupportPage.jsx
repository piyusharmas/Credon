import React from 'react'

import OpenAccounts from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <CreateTicket />
            <Footer />
        </>
     );
}

export default SupportPage;