import React from 'react'

function Stats() {
    return ( 
        <div className="container mt-2 mb-5 p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>Our platform is designed with your needs in mind, ensuring a seamless and secure experience every time.</p>

                    <h2 className='fs-4'>Robust security measures</h2>
                    <p className='text-muted'>We prioritize your safety with advanced security protocols to protect your data and transactions.</p>

                    <h2 className='fs-4'>Comprehensive ecosystem</h2>
                    <p className='text-muted'>Our extensive network of partners and services provides you with everything you need in one place.</p>

                    <h2 className='fs-4'>Do better with your Money</h2>
                    <p className='text-muted'>Our extensive network of partners and services provides you with everything you need in one place.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href=""className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href=""> Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Stats;