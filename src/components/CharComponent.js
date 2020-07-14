import React from 'react';
import './CharComponent.css'

function CharComponent(props) {
    return (
        <div className="box">
            {props.letter}
        </div>
    );
}

export default CharComponent;