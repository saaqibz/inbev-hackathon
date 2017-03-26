import React, {Component} from 'react';
import {
    Router,
    Route,
    hashHistory,
    IndexRoute
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="iphone-view">
                <Router history="hashHistory">
                    <Route path="/" component="Home" />
                    <Route path="/splash"
                </Router>
            </div>
        );
    }
}

export default App;
