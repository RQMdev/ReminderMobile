import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationApp } from './NavigationApp';

export default class GithubApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: ''
    }
  }

  render() {
    return (
      <NavigationApp />
    );
  }
}
