import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './App.css';
import statusBarImg from './assets/ios-statusbar.png';

import SplashView from './components/Splash';
import MenuContainer from './components/Menu';
import PairingView from './components/Pairing';

// <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/topics">Topics</Link></li>
// </ul>
//
// <hr/>

const statusBarStyle = {
    background: `url(${statusBarImg})`,
    backgroundSize: '100% 100%',
    height: '20px',
    width: '100%'
};

const StatusBar = () => (
    <div style={statusBarStyle}></div>
);

const App = () => (
    <div>
        <h1 style={{textAlign:'center'}}>Honey-Badger: Swiil Prototype</h1>
        <hr />
        <Router>
            <div className="iphone-view">
                <StatusBar/>
                <Route exact path="/" component={SplashView}/>
                <Route path="/menu" component={MenuContainer}/>
                <Route path="/pairing" component={PairingView}/>
            </div>
        </Router>
    </div>
);

export default App