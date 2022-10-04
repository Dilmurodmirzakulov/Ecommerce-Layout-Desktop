import { Footer, Navbar } from './components'
import NavLists from './components/home-page2/NavLists'
import Header from './components/home-page2/Header'
import Categories from './components/home-page2/Categories'
import NewProducts from './components/home-page2/NewProducts'
import Recomended from './components/home-page2/Recomended'
import Discover from './components/home-page2/Discover'
import './styles/style.css'
import React from 'react'
export const App1 = () => {
    return (
        <div>
            <Navbar />
            <hr style={{color: '#E0E0E0'}} />
            <NavLists />
            <Header />
            <Categories />
            <NewProducts />
            <Recomended />
            <Discover />
            <Footer />
        </div>
    )
}
