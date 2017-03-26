/**
 * Created by saz on 3/26/17.
 */
import React from 'react';
import bubbles from './assets/logo-small.png';
import headerBkg from './assets/nav-bg.jpg';
import './header.css';

const headerStyle = {
    background: `url(${headerBkg})`,
    width: '375px',
    height:'86px'
};

const Header = () => (
    <div style={headerStyle}>
        <div>
            <img className="bubbles" src={bubbles} />
            <input className="search-bar" type="search" />
        </div>
    </div>
);

export default Header;