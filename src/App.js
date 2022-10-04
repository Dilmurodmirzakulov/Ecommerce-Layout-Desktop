import { Blogs, Facts, Footer, Header, Navbar, NavLists, Product } from './components'
import './styles/style.css'
import React from 'react'
export const App = () => {
    return (
        <div>
            <Navbar />
            <hr style={{color: '#E0E0E0'}} />
            <NavLists />
            <Header />
            <Product/>
            <Facts />
            <Blogs />
            <Footer />
        </div>
    )
}
