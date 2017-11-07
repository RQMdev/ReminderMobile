import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Motdepasse from './components/MDP/Motdepasse.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.logoContainer}>
         <Image
              style ={styles.logo}
             source = {require('./assets/logotype.png')} style = {styles.image} 
             />

             <Text style={styles.title}> Récuperer mon mot de passe </Text>
             <Motdepasse />
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
  paddingTop: 170,
  marginBottom: 40
},

title: {
  color: '#F5F5F5',
  marginTop: 20,
  textAlign: 'center',
  fontSize: 24,
  fontFamily: 'sans-serif',
  paddingBottom: 40

}
});
