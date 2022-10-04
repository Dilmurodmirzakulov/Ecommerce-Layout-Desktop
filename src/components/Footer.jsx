import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-up-container'>
                    <div className='footer-up'>
                        <div className='footer-main-info'>
                            <img src={require('../images/logo.png')} alt = 'logo' />
                            <p className='footer-text'>Company name.<br />© 2018- 2021 Templatemount.<br /> All rights reserved.</p>
                        </div>
                        <ul className='footer-columns'>
                            <li className='footer-column'>
                                <ul className='footer-lists'>
                                    <h5 className='footer-lists-header footer-header'>Help</h5>
                                    <li className='footer-listfooter-text footer-text'>Contact us</li>
                                    <li className='footer-listfooter-text footer-text'>Refunds</li>
                                    <li className='footer-listfooter-text footer-text'>Live chat</li>
                                    <li className='footer-listfooter-text footer-text'>Tracking info</li>
                                </ul>
                            </li>
                            <li className='footer-column'>
                            <ul className='footer-lists'>
                                    <h5 className='footer-lists-header footer-header'>About</h5>
                                    <li className='footer-listfooter-text footer-text'>About us</li>
                                    <li className='footer-listfooter-text footer-text'>Services</li>
                                    <li className='footer-listfooter-text footer-text'>Policy & terms</li>
                                    <li className='footer-listfooter-text footer-text'>Blog posts</li>
                                </ul>
                            </li>
                            <li className='footer-column'>
                            <ul className='footer-lists'>
                                    <h5 className='footer-lists-header footer-header'>Partnership</h5>
                                    <li className='footer-listfooter-text footer-text'>Login / Register</li>
                                    <li className='footer-listfooter-text footer-text'>Settings</li>
                                    <li className='footer-listfooter-text footer-text'>My Orders</li>
                                </ul>
                            </li>
                        </ul>
                        <div className='newsletter'>
                            <h5 className='newsletter-header footer-header'>Newsletter</h5>
                            <p className='newsletter-text footer-text'>Stay in touch with latest updates about our products and offers</p>
                            <div className='email-input'>
                                <input type = 'eamil' className = 'get-email' placeholder='Email' />
                                <button type='button' className='get-email-button'>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-down-wrapper'>
                    <div className='footer-down'>
                        <div className='payment-methods'>
                            <div className='payment-method'><img className='payment american-express' src={require('../images/American-Express-Logo.png')} alt= 'american express' /></div>
                            <div className='payment-method'><img className='payment mastercard' src={require('../images/mastercard.png')} alt ='mastercard' /></div>
                            <div className='payment-method'><img className='payment pay-pal' src={require('../images/pay-pal.png')} alt = 'pay pal' /></div>
                            <div className='payment-method'><img className='payment visa' src={require('../images/visa.png')} alt = 'visa' /></div>
                        </div>
                        <ul className='footer-down-lists'>
                            <li className='footer-down-list'>Support</li>
                            <li className='footer-down-list'>Privacy & Cookies</li>
                            <li className='footer-down-list'>Accessibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer