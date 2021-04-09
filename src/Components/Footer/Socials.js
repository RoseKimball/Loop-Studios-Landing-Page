import React from 'react';
import '../../Containers/Footer/Footer.css';

const images = ['facebook', 'twitter', 'instagram', 'pinterest']
const Socials = () => {
    return (
        <div className='socials'>
            {images.map(i => (
                <img className='social' key={i} src={process.env.PUBLIC_URL + `/images/icon-${i}.svg`} alt={i}></img>
            ))}
        </div>
    )
}

export default Socials