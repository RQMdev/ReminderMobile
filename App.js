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
    this.handleAddSticky = this.handleAddSticky.bind(this);
    this.handleGetStickys = this.handleGetStickys.bind(this);
    this.handleEditSticky = this.handleEditSticky.bind(this);
    this.handleDeleteSticky = this.handleDeleteSticky.bind(this);
  }

  handleToken(token){
    console.log('Token at App Level', token);
    this.setState({token});
    NavigatorService.navigate('Dashboard');
  }

  handleAddSticky(sticky){
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

  handleGetStickys () {
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

  handleEditSticky (sticky) {
    fetch('http://'+ SERVER_IP +':3001/stickys/edit', {
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
    .then( () => { this.handleGetStickys() });
  }

  handleDeleteSticky (sticky) {
    fetch('http://'+ SERVER_IP +':3001/stickys/delete', {
      method: 'DELETE',
      headers: {
        'Authorization': this.state.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sticky)
    })
    .then( res =>	res.json() )
    .then( data => console.log(data) )
    .then( () => { this.handleGetStickys() });
  }

  render() {
    return (
      <NavigationApp
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
        screenProps={{
          handleToken: this.handleToken,
          handleAddSticky: this.handleAddSticky,
          handleGetStickys: this.handleGetStickys,
          handleEditSticky: this.handleEditSticky,
          handleDeleteSticky: this.handleDeleteSticky,
          stickys: this.state.stickys
        }}
      />
    );
  }
}
