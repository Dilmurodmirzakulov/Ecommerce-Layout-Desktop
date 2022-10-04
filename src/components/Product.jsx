import React from 'react'

const Product = (props) => {
    return (
        <>
        <h3 className='products-heading'>New products</h3>
        <div className='carts'>
            <div className='cart'>
                <img className='product-image' src={require('../images/Image-product/camera-old.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>GoPro HERO6 4K Action Camera - Black</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/smart-watch.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Sport Smart Watch Bracelet Round Waterproof </p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/iwatch.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Apple Watch Series 38 mm Black Smartwatch</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/iwatch.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Apple Watch Series 38 mm Black Smartwatch</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/gallaxy.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Xiaomi Redmi 8 Original Global Version 4GB</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/iphone12.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/headphone.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Gaming Headset 32db Blackbuilt in mic</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
            <div className ='cart'>
                <img className='product-image' src={require('../images/Image-product/camera-canon.png')} alt = '' />
                <p className='price'>$99.50</p>
                <p className='desc'>Canon camera  20x zoom, Black color EOS 2000</p>
                <div className='cart-btns'>
                    <button className='add-to-cart'>Add to cart</button>
                    <img className='cart-heart' src={require('../images/heart-empty.png')} alt = ' like ' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Product