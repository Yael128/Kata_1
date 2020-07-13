import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <ol>
                        <li>Create an input field (in App component) with a change listener which outputs the length of
                            the entered text below it (e.g. in a paragraph).
                        </li>
                        <li>Create a new functional component "Validation" which receives the text length as a prop</li>
                        <li>Inside the Validation component, either output "Text too short" or "Text long enough"
                            depending on the text length (e.g. take 5 as a minimum length)
                        </li>
                        <li>Create another functional component CharComponent and style it as an inline box
                            (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid
                            black).
                            this style should be in a independent CSS and imported
                        </li>
                        <li>
                            Render a list of CharComponents where each CharComponent receives a different letter of the
                            entered text
                            (in the initial input field) as a prop.
                        </li>
                        <li>When you click a CharComponent, it should be removed from the entered text.</li>
                        <li>Add a new component that keeps track of how many times user clicked any of the chars and which char was it</li>
                        <li>Convert App Component to a stateful functional component</li>
                        <li>Give this list inline style to make it pretty</li>
                    </ol>
                    <b style={{color:'red'}}>Note: Commit every step</b>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays</p>
                </div>
            </div>
        );
    }
}

export default App;
