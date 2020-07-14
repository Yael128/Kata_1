import React, {useState} from 'react';
import './App.css';

import Validation from './components/Validation';
import ClickTracker from './components/ClickTracker';

function App() {
    const [text, setText] = useState('')


    const handleChange = (e) => {
        setText(e.target.value)
    }

    const removeLetter = (index) => {
        const fSting = text.substring(0, index)
        const sString = text.substring(index + 1, text.length)

        setText(fSting + sString)
    }
        return (
            <div className="App">
                <input value={text} onChange={handleChange}></input>
                <p>{text.length}</p>
                <Validation textLength={text.length}/>
                <ClickTracker text={text} removeLetter={removeLetter}/>
            </div>
        );
    }


export default App;
