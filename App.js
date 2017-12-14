import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationAction } from 'react-navigation';
import NavigatorService from './services/Navigator';
import { NavigationApp } from './NavigationApp';
import { SERVER_IP } from './ServerConfig';
import { Notifications, Permissions, Constants } from 'expo';


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
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  async componentDidMount() {
    let result = await
    Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.lisDevice && result.status === 'granted') {
     console.log('Notification permissions granted.')
    }
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
    .then( data => {
        console.log(data);
        this.handleNotification(data);
      }
    )
    .then( () => this.handleGetStickys() );
  }

  async handleNotification(sticky){
    console.log('Sticky in handleNotification : ', sticky);
    const localNotification = {
        title: 'Reminder',
        body: sticky.content,
        ios: {
          sound: true,
        },
        android: {
          sound: true,
          priority: 'high',
          sticky: false,
          vibrate: true,
        }
      };

    let t = new Date(sticky.datePicked);
    // t.setSeconds(t.getSeconds() + 10);
    // t.setHours(t.getHours() - 1);
    console.log('T is : ', t);

      const schedulingOptions = {
        time: t,
      };

    let notificationId = await Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
    console.log('Notification ID : ', notificationId);
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

  handleImageUpload (formData, currentSticky) {
    console.log('handleImageUpload Called!');
    console.log(formData);
    const url = 'http://'+ SERVER_IP +':3001/stickys/image';
    const options = {
      method: 'POST',
      body: formData,
      header: {
        'authorization': this.state.token,
        'content-type': 'multipart/form-data'
      }
    };
    fetch(url, options)
      // .then( res => res.json() )
      .then( data => data.json() )
      .then( data => {
        console.log(data)
        currentSticky.image = data.path;
        console.log(currentSticky);
        this.handleEditSticky(currentSticky);
      } );
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
          stickys: this.state.stickys,
          handleImageUpload: this.handleImageUpload
        }}
      />
    );
  }
}
