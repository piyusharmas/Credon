import React from 'react'

import OpenAccounts from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductPage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <LeftSection />
            <RightSection />
            <OpenAccounts />
            <Footer />
        </>
     );
}

export default ProductPage;