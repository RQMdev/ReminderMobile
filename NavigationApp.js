import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ForgetPassword from './components/ForgetPassword';
import SignUp from './components/SignUp';

export const NavigationApp = StackNavigator({
    SignIn: { screen: SignIn },
    Dashboard: { screen: Dashboard },
    ForgetPassword: { screen: ForgetPassword },
    SignUp: { screen: SignUp },

}, 

{ navigationOptions: {
       header:null,
    }}
);
