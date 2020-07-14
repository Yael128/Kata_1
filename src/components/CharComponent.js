import React from 'react';
import './CharComponent.css'

function CharComponent(props) {    

    return (
        <div className="box" onClick={() => {props.removeLetter(props.index); props.handleClick(props.letter)}}>
            {props.letter}
        </div>
    );
}

export default CharComponent;