import React, {Component} from 'react';
import './App.css';
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home></Home>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        );
    }
}

export default App;