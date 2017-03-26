import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import statusBarImg from './assets/ios-statusbar.png';

import SplashView from './components/Splash';
import MenuContainer from './components/Menu';

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

const SuggestionView = () => (
    <div>
        <h2>MenuView</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        {/*<Route path={`${match.url}/:topicId`} component={Topic}/>*/}
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
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
                <Route path="/suggestion" component={SuggestionView}/>
            </div>
        </Router>
    </div>
);

export default App