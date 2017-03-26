/**
 * Created by saz on 3/26/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

import splashBkg from '../assets/bg.svg';
import logo from '../assets/logo.png';

const splashViewStyle = {
    background: `url(${splashBkg})`,
    backgroundSize: '100%',
    width: '100%',
    height: '647px',
    position: 'relative',
    top: 0,
    left: 0
};

const SplashView = ({ categories, entrees, selectedCategory }) => (
    <div style={splashViewStyle}>
        <div className="logo-box">
            <img src={logo} />
            <div className="tagline">Find your perfect drink</div>
            <Link to="/menu">
                <button className="go">Let's Go!</button>
            </Link>
        </div>
    </div>
);

export default SplashView;
