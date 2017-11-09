import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import SignInForm from './SignInForm';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state={};
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
		  		<SignInForm navigation={this.props.navigation} />
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
