/**
 * Created by saz on 3/26/17.
 */
import React from 'react';

import './Splash.css';

import splashBkg from '../assets/bg.svg';
import logo from '../assets/logo.svg';

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
            <p className="tagline">Find your perfect drink</p>
            <button className="go">Let's Go!</button>
        </div>
    </div>
);

export default SplashView;
