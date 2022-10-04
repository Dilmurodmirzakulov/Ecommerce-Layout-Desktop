import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='center nav'>
                <div className='logo'>
                    <img className='logo' src= {require('../images/logo.png')} />
                </div>
                <div className='search-bar center'>
                    <input />
                    <select>
                        <option>Select</option>
                    </select>
                    <img className='search-bar-icon' src={require('../images/search.png')} />
                </div>
                <div className='navbar-items'>
                    <button className='center nav-item'>
                        <img src={require('../images/profile.png')} />
                        <span>Sign in</span>
                    </button>
                    <button className='center nav-item'>
                        <img src={require('../images/heart-fill.png')} />
                        <span>Wish List</span>
                    </button>
                    <button className='center nav-item'>
                        <img src={require('../images/basket.png')} />
                        <span>My Cart</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar