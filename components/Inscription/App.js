import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginForm from './components/Login/LoginForm.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.logoContainer}>
         <Image
              style ={styles.logo}
             source = {require('./assets/logotype.png')} style = {styles.image} 
             />

             <Text style={styles.title}> Inscription </Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      </View>
    </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
},

logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  paddingTop: 80
},

title: {
  color: '#F5F5F5',
  marginTop: 20,
  textAlign: 'center',
  fontSize: 24,
  fontFamily: 'sans-serif'

}
});
