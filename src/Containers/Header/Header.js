import React, {useState} from 'react';
import './Header.css';
import Logo from '../../Components/Logo';
import Menu from '../../Components/Menu';
import Tagline from '../../Components/header/Tagline';
import HamburgerMenu from '../../Components/mobile/HamburgerMenu';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const onClickHandle = () => {
        setNavbarOpen(prev => !prev);
    }

    return (
        <div className='container'>
            <img className='mobile hero' src={process.env.PUBLIC_URL + '/images/mobile/image-hero.jpg'} alt='hero'/>
            <img className='desktop hero' src={process.env.PUBLIC_URL + '/images/desktop/image-hero.jpg'} alt='hero'/>
            <Logo className='headerLogo'/>
            <Menu onClick={onClickHandle} className='headerMenu' navbarOpen={navbarOpen ? 'hide' : 'show'}/>
            <HamburgerMenu className={`hamburgerMenu ${navbarOpen ? 'showMenu' : ""}`} onClick={onClickHandle}/>
            <Tagline />
        </div>
    )
}

export default Header;