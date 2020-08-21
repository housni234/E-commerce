import React from 'react';
import './header.css'

function Header() {
    return (
        <div className='header-container'>
            <div>
                Book Store
            </div>
            <div className='cart-signin'>
                <a href=''>Cart</a>
                <a href=''>Sign In</a>
            </div>
        </div>
    )
}

export default Header;