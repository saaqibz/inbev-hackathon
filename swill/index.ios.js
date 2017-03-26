/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import SwiilNav from './app/SwiilNav'

export default class swill extends Component {
  render() {
    return (
        <SwiilNav style="{styles.main}"/>
    );
  }
}

AppRegistry.registerComponent('swill', () => swill);
