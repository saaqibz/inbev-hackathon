/** Navigation page */

import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Splash from './components/Splash';
import Main from './components/Main';

class SwiilNav extends Component {

    renderScene(route, navigator) {
        switch (route.name) {
            case 'splash':
                return <Splash navigator={navigator} />;
            case 'main':
                return <Main navigator={navigator} />;

        }
    }

    render() {
        return (
            <Navigator
                // initialRoute={{ name: 'splash', title: 'Swiil', index: 0 }}
                initialRoute={{ name: 'main', title: 'Swiil', index: 0 }} // DEBUG
                renderScene={(route, navigator) => this.renderScene(route, navigator)}
            />
        );
    }
}

export default SwiilNav