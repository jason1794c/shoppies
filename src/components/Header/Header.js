import React from 'react';
import logo from '../../assets/Images/shoppies-logo.svg';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='Shoppies' />
        </div>
    )
}

export default Header
