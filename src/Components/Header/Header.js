import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Scss/header.scss';
import headerLogo from '../../img/headerLogo.png';
import {connect} from 'react-redux';
import {toggleSearch} from '../../redux/reducers/searchReducer';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='left-links'>
                <Link to='/home' className='header-link'>Home</Link>
                <button id='search-button' onClick={props.toggleSearch}>
                    Search
                </button>
            </div>
            <div id='header-logo'>
                <img src={headerLogo} alt='meh'/>
            </div>
            <div className='right-links'>
            <Link to='/cart' className='header-link'>Cart</Link>
            <Link to='/profile' className='header-link'>Profile</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        search: reduxState.search
    }
}

export default connect(mapStateToProps, {toggleSearch})(Header);