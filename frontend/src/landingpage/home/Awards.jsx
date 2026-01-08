import React from 'react'
function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Awards"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million clients contribute 
                        to over 15% of all retail trades in India daily by
                        trading and investing in:</p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Futures and Options</li>
                                    <li>Commoditiy Derivatives</li>
                                    <li>Currency Derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Stocks & IPOs</li>
                                    <li>Direct Mutual Funds</li>
                                    <li>Bonds & Government Securities</li>
                                </ul>
                            </div>
                        </div>
                        <img src="media/images/pressLogos.png" alt="presslogos" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;