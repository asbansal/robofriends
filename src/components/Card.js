import React from 'react';

const card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default card;