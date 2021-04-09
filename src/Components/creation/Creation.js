import React from 'react';
import '../../Containers/Creations/Creations.css';

const Creation = ({data}) => {
    return (
        <div className='grid'>
            {data.map(c => (
                <div className='creation' key={c.title}>
                    <img className='img' src={process.env.PUBLIC_URL + `/images/desktop/image-${c.image}.jpg`} alt={c.title}></img>
                    <p className='title'>{c.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Creation;