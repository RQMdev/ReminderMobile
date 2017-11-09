import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';

export const NavigationApp = StackNavigator({
    SignIn: { screen: SignIn },
    Dashboard: { screen: Dashboard },
    SignUp: { screen: SignUp },
    ForgetPassword: { screen: ForgetPassword }
},

{ navigationOptions: {
        header: null

    }}
);
