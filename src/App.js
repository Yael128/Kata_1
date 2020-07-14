import React, {Component} from 'react';
import './App.css';

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
            </div>
        );
    }
}

export default App;
