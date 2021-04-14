import React from 'react';
import '../Containers/Header/Header.css';
import '../Containers/Footer/Footer.css'

const Menu = (props) => {
    return (
        <>
            <ul className={props.className}>
                <li className='listItem'>About</li>
                <li className='listItem'>Careers</li>
                <li className='listItem'>Events</li>
                <li className='listItem'>Products</li>
                <li className='listItem'>Support</li>
            </ul>
            {/* <img className={props.navbarOpen} src={process.env.PUBLIC_URL + '/images/icon-hamburger.svg'} alt='menu' onClick={props.onClick} /> */}

        </>
    )
}

export default Menu;