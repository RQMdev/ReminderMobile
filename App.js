import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';
import { StackNavigator } from 'react-navigation';

import Dashboard from './components/Reminder/Dashboard';

const NavigationApp = StackNavigator({
    Connexion: { screen: Login },
    Dashboard: { screen: Dashboard },
}, /*{ navigationOptions: {
        headerStyle: {
            marginTop: Expo.Constants.statusBarHeight,
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',
    }}*/
);


export default class GithubApp extends Component {
   
   render() {
    return (
      <NavigationApp />
    );
   }
  }
