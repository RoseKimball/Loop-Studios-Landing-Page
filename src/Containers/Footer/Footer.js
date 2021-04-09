import React from 'react';
import './Footer.css'
import Menu from '../../Components/Menu';
import Logo from '../../Components/Logo';
import Socials from '../../Components/Footer/Socials';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='left'>
                <Logo className='footerLogo'/>
                <Menu  className='footerMenu' />
            </div>
            <div className='right'>
                <Socials />
                <p className='copy'>&copy; Loopstudios. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;