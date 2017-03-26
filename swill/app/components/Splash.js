
/**
 * Splash Screen
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import bkg from '../../img/bg.png';
import logo from '../../img/logo.png';

class Splash extends Component {
    constructor() {
        super();
        this.state = {}
    }

    segueNext() {
        const text = this.state.selectedBar;
        this.props.navigator.push({
            name:'main',
            bar: this.state.selectedBar
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={bkg}  style={styles.backgroundImage} />
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.saying}>
                    Find your perfect drink
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(selectedBar) => this.setState({selectedBar})}
                    placeholder="Select Bar"
                    value={this.state.selectedBar}
                    onSubmitEditing={() => this.segueNext()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    backgroundImage: {
        resizeMode: 'stretch',
        position: 'absolute'
    },
    saying: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    logo: {
        // position: 'absolute',
        width: 288,
        height: 160,
        marginLeft: 40,
        marginTop: 140
    },
    textInput: {
        marginLeft: 28,
        marginTop: 30,
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    }
});

export default Splash