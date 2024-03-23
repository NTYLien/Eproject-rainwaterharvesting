import React from 'react';
import './Navbar.css'
import logo from './logo-rainharvesting.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Navbar({ handleInputChange, query }) {

    const nav = useNavigate();
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)



    return (

        <nav>
            <div className='header'>
                <div className='top-header'>
                    <img src={logo} alt="logo" className='logo' onClick={() => { nav('/') }} />

                    <input type="text" placeholder=" Search..."
                        className="search-box"
                        onChange={handleInputChange}
                        onFocus={() => { nav('/products') }}
                        value={query} />

                    <button className="shopping-cart-button"
                        onClick={() => { nav('/shoppingcart') }}
                    >
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span> 0 Items</span>
                    </button>

                    <button className="wishlist-button"
                        onClick={() => { nav('/wishlist') }}
                    >
                        <i class="fa-solid fa-heart"></i>

                    </button>

                    <button className='log-in'>
                        <span>Login</span>
                        <i class="fa-solid fa-circle-user"></i>
                    </button>
                </div>

                <div className='navbar'>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>

                    </div>

                    <div >
                        <ul className={click ? 'nav-menu active' : 'nav-menu'} >

                            <li className='nav-item'
                            >
                                <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>HOME</NavLink></li>
                            <li className='nav-item'

                            >
                                <NavLink to="/products" className='nav-links' onClick={closeMobileMenu} >PRODUCTS </NavLink></li>


                            <li className='nav-item'>
                                <NavLink to="/learn-and-ask" className='nav-links' onClick={closeMobileMenu} >LEARN & ASK</NavLink></li>
                            <li className='nav-item'>
                                <NavLink to="/our-projects" className='nav-links' onClick={closeMobileMenu} >OUR PROJECTS</NavLink></li>
                            <li className='nav-item'>
                                <NavLink to="/about-us" className='nav-links' onClick={closeMobileMenu} >ABOUT US</NavLink></li>
                            <li className='nav-item'>
                                <NavLink to="/news" className='nav-links' onClick={closeMobileMenu} >NEWS</NavLink></li>
                            <li className='nav-item'>
                                <NavLink to="/interactive-tools" className='nav-links' onClick={closeMobileMenu} >INTERACTIVE TOOLS</NavLink></li>
                            <li className='nav-item'>
                                <NavLink to="/contact-us" className='nav-links' onClick={closeMobileMenu} >CONTACT US</NavLink></li>

                        </ul>

                    </div>


                </div>
            </div>


        </nav >

    )

}

export default Navbar;