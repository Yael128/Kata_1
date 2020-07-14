import React, { useState } from 'react';
import CharComponent from './CharComponent';
import './ClickTracker.css'

function ClickTracker(props) {
    const [clicks, setClicks] = useState(0)
    const [charClick, setCharClick] = useState('')

    const handleClick = (letter) => {
        setClicks(clicks + 1)
        setCharClick(charClick + letter)
    }
    return (
        <div>
            {props.text.split('').map((letter, index) => 
                <CharComponent key={index} index={index} letter={letter} removeLetter={props.removeLetter} handleClick={handleClick}/>
            )}
            <div>
                <p className="pretty">Clicks: {clicks}</p><br/><br/>
                <p className="pretty">Chars deleted: {charClick}</p>
            </div>
        </div>
    );
}

export default ClickTracker;