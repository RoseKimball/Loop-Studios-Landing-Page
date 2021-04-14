import React from 'react';
import './HamburgerMenu.css';
import Logo from '../Logo';
import Menu from '../Menu';

const HamburgerMenu = (props) => {
    return (
        <div className={props.className}>
            <div className='top'>
                <Logo className='mobileMenuLogo'/>
                <img className='closeButton' src={process.env.PUBLIC_URL + '/images/icon-close.svg'} alt='close' onClick={props.onClick}/>
            </div>
            <Menu className='mobileMenu'/>
        </div>
    )
}

export default HamburgerMenu;