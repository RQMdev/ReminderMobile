import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
            <View style={styles.logoContainer}>
                 <Image style = {styles.logo} source = {require('./../../assets/img/logotype2.png')} style = {styles.image} />
                 <Text style={styles.title}> Inscription </Text>
          </View>
          <View style={styles.formContainer}>
              <SignUpForm navigation={this.props.navigation} />
          </View>
      </ScrollView>
      </KeyboardAvoidingView>

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
