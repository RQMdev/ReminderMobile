import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import SignInForm from './SignInForm';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state={};
		this.handleToken = this.handleToken.bind(this);
	}

	handleToken(token) {
    console.log('SignUp Level token :', token)
    console.log(this.props.screenProps)
    this.props.screenProps.handleToken(token);
  }

	onPressButton= () => {
		this.setState({});
	}

	render() {
    return (
    	<KeyboardAvoidingView style={styles.container} behavior="padding">

		  <ScrollView >
		  	<View style={styles.logoContainer}>
		  	  <Image
		  	  style={styles.logo}
		  	  source={require('../../assets/img/logotype2.png')}
		  	  onPress={this.onPressButton}
		  	  />
		  	  <Text style={styles.title}> Connexion </Text>
		    </View>
		  	<View style={styles.formContainer}>
		  		<SignInForm navigation={this.props.navigation} handleToken={this.handleToken} />
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
		padding: 70,
		alignItems: 'center',
		// flexGrow: 1,
		// justifyContent: 'center'
	},
	title: {
		color: '#f5f5f5',
		marginTop: 10,
		fontSize: 25,
	}
});
