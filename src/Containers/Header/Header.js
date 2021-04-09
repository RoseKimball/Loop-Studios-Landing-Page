import React from 'react';
import './Header.css';
import Logo from '../../Components/Logo';
import Menu from '../../Components/Menu';
import Tagline from '../../Components/header/Tagline';

const Header = () => {
    return (
        <div className='container'>
            <img className='hero' src={process.env.PUBLIC_URL + '/images/desktop/image-hero.jpg'} alt='hero'></img>
            <Logo className='headerLogo'/>
            <Menu className='headerMenu'/>
            <Tagline />
        </div>
    )
}

export default Header;