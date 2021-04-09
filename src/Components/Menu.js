import React from 'react';
import '../Containers/Header/Header.css';

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

        </>
    )
}

export default Menu;