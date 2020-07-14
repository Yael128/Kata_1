import React, {Component} from 'react';
import './App.css';

import Validation from './components/Validation';
import CharComponent from './components/CharComponent';
import ClickTracker from './components/ClickTracker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.removeLetter = this.removeLetter.bind(this)
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    removeLetter(index) {
        const {text} = this.state
        const fSting = text.substring(0, index)
        const sString = text.substring(index + 1, text.length)

        this.setState({text: fSting + sString})
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleChange}></input>
                <p>{this.state.text.length}</p>
                <Validation textLength={this.state.text.length}/>
                <ClickTracker text={this.state.text} removeLetter={this.removeLetter}/>
            </div>
        );
    }
}

export default App;
