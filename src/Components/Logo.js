import React from 'react';
import '../Containers/Header/Header.css';

const Logo = (props) => {
    return (
        <img className={props.className} src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='loopLogo'></img>
    )
}

export default Logo;