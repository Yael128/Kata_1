import React, {Component} from 'react';
import './App.css';

import Validation from './components/Validation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange}></input>
                <p>{this.state.text.length}</p>
                <Validation text={this.state.text.length}/>
            </div>
        );
    }
}

export default App;
