import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
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
		  <View style={styles.container}>
		  	<View style={styles.logoContainer}>
		  	  <Image
		  	  style={styles.logo}
		  	  source={require('./images/logotype2.png')}
		  	  onPress={this.onPressButton}
		  	  />
		  	  <Text style={styles.title}> Connexion </Text>
		    </View>
		  	<View style={styles.formContainer}>
		  		<SignInForm navigation={this.props.navigation}/>
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
