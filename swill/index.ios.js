/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SwiilNav from './app/SwiilNav'

export default class swill extends Component {
  render() {
    return (
        <SwiilNav style="{styles.main}"/>
    );
  }
}

const styles = StyleSheet.create({
    main: {
      width: '500px'
    }
});

AppRegistry.registerComponent('swill', () => swill);
