import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function ErrorPage() {
    return (
        <>
        <Navbar/>
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Error:404</h1>
                <p>Page Not Found!!</p>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default ErrorPage;