import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

export const NavigationApp = StackNavigator({
    SignIn: { screen: SignIn },
    Dashboard: { screen: Dashboard },
}, { navigationOptions: {
        header: null
    }}
);
