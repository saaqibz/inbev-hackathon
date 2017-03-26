/** Navigation page */

import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';

import Splash from './components/Splash';

class SwiilNav extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'splash', title: 'Swiil', index: 0 }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'splash':
                            return <Splash />
                    }
                }}
            />
        );
    }
}

export default SwiilNav