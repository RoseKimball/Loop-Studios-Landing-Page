import React from 'react';
import './Description.css';
import Copy from '../../Components/description/Copy';
import Block from '../../Components/description/Block';

const Description = () => {
    return (
        <div className='containerDescription'>
            <img className='interactive' src={process.env.PUBLIC_URL + '/images/desktop/image-interactive.jpg'} alt='interactive'></img>
            <Copy />
            <Block />
        </div>
    )
}

export default Description;