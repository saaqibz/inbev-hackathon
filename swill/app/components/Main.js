/**
 * Main Screen
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import SearchBar from 'react-native-search-bar';

import headerBkg from '../../img/header.jpg';

class Main extends Component {
    constructor() {
        super();
        this.state = {}
    }

    segueNext() {
        this.props.navigator.push({
            name:'main',
            bar: this.state.selectedBar
        })
    }

    _renderContent = (color: string, pageText: string, num?: number) => {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    };


    renderTabOptions() {
        return (
            <View style={styles.tabBar}>
                <Button style={styles.tabBarItem}
                    title="Hello"
                    onPress={() => {}}
                />
                <Button style={styles.tabBarItem}
                    title="Hell 2"
                    onPress={() => {}}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={headerBkg}  style={styles.headerBkg} />

                <Text style={styles.heading}>
                    Drink Ideas
                </Text>
                <SearchBar
                    searchBarStyle="default"
                    ref='searchBar'
                    placeholder='Search'
                    barTintColor="#000"
                    onChangeText={() => {}}
                    onSearchButtonPress={() => {}}
                    onCancelButtonPress={() => {}}
                />

                {this.renderTabOptions()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    headerBkg: {
        resizeMode: 'stretch',
        position: 'absolute',
        height: 140
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabBar: {
        marginTop: 41,
        backgroundColor: '#efefef',
        flex: 1,
        flexDirection: 'row',
        width: 500
    },
    tabBarItem: {
        width: 500,
        height: 100
    },
    textInput: {
        marginLeft: 28,
        marginTop: 30,
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    }
});

export default Main