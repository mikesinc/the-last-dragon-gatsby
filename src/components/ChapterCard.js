import React from 'react';
import '../styles/ChapterCard.css';
import Card from 'react-bootstrap/Card';

const ChapterCard = ({ chapter, title, selected, handleClick, handleMouseOver, handleMouseLeave }) => {
    return (
        <div className="overall">
            {chapter === selected ? (
                <Card id="card_back" onClick={handleClick}>
                    <h1>{title}</h1>
                </Card>
            ) : (
                    <div id="card_front" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleClick} onKeyDown={null} role="none" ></div>
                )}
        </div>
    )
}

export default ChapterCard;