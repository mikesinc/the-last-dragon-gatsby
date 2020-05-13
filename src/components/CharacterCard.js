import React from 'react';
import Media from 'react-bootstrap/Media';

const CharacterCard = ({ image, name, race, gameClass, bio }) => {
    const path = require(`../assets/images/${image}.jpg`);

    return (
        <Media as="li" className='character' >
            <img
                className="mr-3"
                src={path}
                alt={image}
            />
            <Media.Body className='characterText'>
                <h5>{name}</h5>
                <h2>{race} | {gameClass}</h2>
                <p>
                    {bio}
                </p>
            </Media.Body>
        </Media>
    );
}

export default CharacterCard;