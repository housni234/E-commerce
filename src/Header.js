import React from 'react';
import './header.css'

function Header() {
    return (
        <div className='header-container'>
            <div>
                Book Store
            </div>
            <form >
                <input type="text" placeholder="Search.."/>
                <button type="submit"><i className="fa fa-search"></i>Go</button>
            </form>
                <div className='cart-signin'>
                    <a href=''>Cart</a>
                    <a href=''>Sign In</a>
                </div>
        </div>
    )
}

export default Header;