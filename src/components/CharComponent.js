import React from 'react';
import './CharComponent.css'

function CharComponent(props) {
    return (
        <div className="box" onClick={() => props.removeLetter(props.index)}>
            {props.letter}
        </div>
    );
}

export default CharComponent;