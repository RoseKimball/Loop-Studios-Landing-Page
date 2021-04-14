import React from 'react';
import Creation from '../../Components/creation/Creation';
import Button from '../../Components/creation/Button';
import './Creations.css';

const creationData = [
    {
        image: 'deep-earth',
        title: 'DEEP EARTH'
    },
    {
        image: 'night-arcade',
        title: 'NIGHT ARCADE'
    },
    {
        image: 'soccer-team',
        title: 'SOCCER TEAM VR'
    },
    {
        image: 'grid',
        title: 'THE GRID'
    },
    {
        image: 'from-above',
        title: 'FROM UP ABOVE VR'
    },
    {
        image: 'pocket-borealis',
        title: 'POCKET BOREALIS'
    },
    {
        image: 'curiosity',
        title: 'THE CURIOSITY'
    },
    {
        image: 'fisheye',
        title: 'MAKE IT FISHEYE'
    }
]

/*

give mobile grid a class and hide it when in desktop
Add another button undeneath grid and pass mobile classname to it-
it will be hidden in desktop and have different styling
*/

const Creations = () => {
    return (
        <>
            <div className='ourCreations'>
                <h1 className='header'>OUR CREATIONS</h1>
                <Button className='buttonBlack'/>
            </div>
            <Creation data={creationData}/>
            <Button className='buttonWhite'/>
        </>
    )
}

export default Creations;

//  ../../images/desktop/image-
//  .jpg