import React from 'react'

const NavLists = () => {
    return (
        <div>
            <nav className='center nav-lists'>
                <div>
                    <img className='bars' src={require('../../images/bars.png')} />
                    <span className='categories'>Categories</span>
                </div>
                <ul className='nav-lists-ul'>
                    <li>Hot offers</li>
                    <li>Gift boxes</li>
                    <li>Projects</li>
                    <li>Menu Items</li>
                    <select>
                        <option>Others</option>
                    </select>
                </ul>
            </nav>
        </div>
    )
}

export default NavLists