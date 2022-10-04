import React from 'react'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <h1>Best products & <br /> brands in our store</h1>
                <p>Trendy Products, Factory Prices, Excellent Service</p>
                <div className='btns'>
                    <button className='headder-button discover-btn'>Discover</button>
                    <button className='headder-button learn-btn'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Header