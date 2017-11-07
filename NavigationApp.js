import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

export const NavigationApp = StackNavigator({
    SignIn: { screen: SignIn },
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
