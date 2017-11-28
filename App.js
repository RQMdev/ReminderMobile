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
      token: '',
      stickys: []
    }
    this.handleToken = this.handleToken.bind(this);
    this.handleAddStickys = this.handleAddStickys.bind(this);
    this.handleGetStickys = this.handleGetStickys.bind(this);
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
    .then( sticky => {
      this.setState({
        ...this.state,
        stickys: [...this.state.stickys, sticky]
      });
      console.log(sticky);
    });
  }

  handleGetStickys(){
    fetch('http://'+ SERVER_IP +':3001/stickys/', {
      method: 'GET',
      headers: {
        'Authorization': this.state.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then( res =>	res.json() )
    .then( stickys => {
      this.setState({
        ...this.state,
        stickys
      });
      console.log(stickys);
    });
  }

  render() {
    return (
      <NavigationApp
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
        screenProps={{
          handleToken: this.handleToken,
          handleAddStickys: this.handleAddStickys,
          handleGetStickys: this.handleGetStickys,
          stickys: this.state.stickys
        }}
      />
    );
  }
}
