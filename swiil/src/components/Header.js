/**
 * Created by saz on 3/26/17.
 */
import React from 'react';
import bubbles from '../assets/logo-small.png';
import headerBkg from '../assets/nav-bg.jpg';

import './Header.css';

const headerStyle = {
    background: `url(${headerBkg})`,
    width: '375px',
    height:'86px'
};

const barName = 'Upstairs Jazz Bar & Grill';

const Header = () => (
    <div>
        <div style={headerStyle}>
            <div>
                <img className="bubbles" src={bubbles} />
                <input className="search-bar" type="search" />
            </div>
            <div className="bar-name">{barName}</div>
        </div>
        <div className="nav">
            <div className="nav-item">
                Drink Ideas
            </div>
            <div className="nav-item selected">Food Pairings</div>
        </div>
    </div>
);

export default Header;