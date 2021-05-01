import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import awards from '../../assets/Images/awards.svg';
import logo from '../../assets/Images/shoppies-logo.svg';
import './Banner.css';

function Banner({ open, handleClose }) {
    return (
        <Dialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby='Banner'
        >
            <img className='logo' src={logo} alt='Shoppies' />
            <h1>You have chosen</h1>
            <h1>5 nominees!</h1>
            <img className='awards' src={awards} alt='awards' />
        </Dialog>
    )
}

export default Banner
