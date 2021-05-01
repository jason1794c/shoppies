import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>Shoppies © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
