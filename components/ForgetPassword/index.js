import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Password from './Password';

export default class ForgotPassword extends React.Component {
  render() {
    return (
     
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
           <Image
            style ={styles.logo}
            source = {require('../../assets/img/logotype2.png')} style = {styles.image}
            />

            <Text style={styles.title}> Récuperer mon mot de passe </Text>
            <Password />
          </View>
        </ScrollView>
     
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
  paddingTop: 100,
  marginBottom: 40
},

title: {
  color: '#F5F5F5',
  marginTop: 50,
  textAlign: 'center',
  fontSize: 15,
  fontFamily: 'sans-serif',
  paddingBottom: 40

}
});
