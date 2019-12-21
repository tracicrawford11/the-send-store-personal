import React from 'react';
import {Link} from 'react-router-dom';
import './Scss/header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='left-links'>
                <Link to='/home' className='header-link'>Home</Link>
                <button id='search-button'>Search</button>
            </div>
            <div id='header-logo'>
                The
                Send
                Store
            </div>
            <div className='right-links'>
            <Link to='/cart' className='header-link'>Cart</Link>
            <Link to='/profile' className='header-link'>Profile</Link>
            </div>
        </div>
    )
}

export default Header;