import React from 'react'

const Facts = () => {
    return (
        <div className='fact-wrapper'>
            <h3 className='facts-header'>Why choose us</h3>
            <div className='fact-container'>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>Fast delivery</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>Reasonable prices</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>24/7 Customer service</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>5 Years warranty</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>Award winning company</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
                <div className='fact'>
                    <div className='star-container'>
                        <img className='star' src={require('../images/star.png')} />
                    </div>
                    <div>
                        <h5 className='fact-header'>Best quality items</h5>
                        <p className='fact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts