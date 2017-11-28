import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationAction } from 'react-navigation';
import NavigatorService from './services/Navigator';
import { NavigationApp } from './NavigationApp';
import { SERVER_IP } from './ServerConfig';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: ''
    }
    this.handleToken = this.handleToken.bind(this);
    this.handleAddStickys = this.handleAddStickys.bind(this);
  }

  handleToken(token){
    console.log('TOKEN at App Level', token);
    this.setState({token});
    NavigatorService.navigate('Dashboard');
  }

  handleAddStickys(sticky){
    // Fetch Here
    fetch('http://'+ SERVER_IP +':3001/stickys/add', {
      method: 'POST',
      headers: {
        'Authorization': this.state.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sticky)
    })
    .then( res =>	res.json() )
    .then( data => console.log(data) )
  }

  render() {
    return (
      <NavigationApp
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
        screenProps={{handleToken: this.handleToken,
        handleAddStickys: this.handleAddStickys}}
      />
    );
  }
}
