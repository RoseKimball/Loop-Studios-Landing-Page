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

const Creations = () => {
    return (
        <>
            <div className='ourCreations'>
                <h1 className='header'>OUR CREATIONS</h1>
                <Button />
            </div>
            <Creation data={creationData}/>
        </>
    )
}

export default Creations;

//  ../../images/desktop/image-
//  .jpg