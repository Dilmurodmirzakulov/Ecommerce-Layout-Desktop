import React from 'react'

const Blogs = () => {
    return (
        <div>
            <h3 className='blog-title'>Blog posts</h3>
            <div className='blogs-wrapper'>
                <div className='blog'>
                    <div className='blog-image-container'>
                        <img className='blog-image' src={require('../images/blog.png')} />
                    </div>
                    <div className='blog-desc'>
                        <div className='date-container'>
                            <img src={require('../images/calendar.png')} />
                            <span className='date'>23.12.2021</span>
                        </div>
                        <h5 className='blog-header'>How to promote brands</h5>
                        <p className='blog-text'>When you enter into any new area of science, you almost</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blog-image-container'>
                        <img className='blog-image' src={require('../images/blog.png')} />
                    </div>
                    <div className='blog-desc'>
                        <div className='date-container'>
                            <img src={require('../images/calendar.png')} />
                            <span className='date'>23.12.2021</span>
                        </div>
                        <h5 className='blog-header'>How to promote brands</h5>
                        <p className='blog-text'>When you enter into any new area of science, you almost</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blog-image-container'>
                        <img className='blog-image' src={require('../images/blog.png')} />
                    </div>
                    <div className='blog-desc'>
                        <div className='date-container'>
                            <img src={require('../images/calendar.png')} />
                            <span className='date'>23.12.2021</span>
                        </div>
                        <h5 className='blog-header'>How to promote brands</h5>
                        <p className='blog-text'>When you enter into any new area of science, you almost</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blog-image-container'>
                        <img className='blog-image' src={require('../images/blog.png')} />
                    </div>
                    <div className='blog-desc'>
                        <div className='date-container'>
                            <img src={require('../images/calendar.png')} />
                            <span className='date'>23.12.2021</span>
                        </div>
                        <h5 className='blog-header'>How to promote brands</h5>
                        <p className='blog-text'>When you enter into any new area of science, you almost</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs