import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationAction } from 'react-navigation';
import NavigatorService from './services/Navigator'
import { NavigationApp } from './NavigationApp';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: ''
    }
    this.handleToken = this.handleToken.bind(this);
  }

  handleToken(token){
    console.log('TOKEN at App Level', token);
    this.setState({token});
    NavigatorService.navigate('Dashboard');
  }

  render() {
    return (
      <NavigationApp
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
        screenProps={{handleToken: this.handleToken}}
      />
    );
  }
}
