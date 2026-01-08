import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" className='mb-5' alt=" Hero-Image" />
                <h1 className='mt-5'>Invest in your future</h1>
                <p>Join millions of investors on our platform and start building your wealth today.</p>
                <button className="p-3 btn btn-primary fs-5" style={{width:"30%", margin:"0 auto"}}>SIGN UP</button>
            </div>
        </div>
     );
}

export default Hero;