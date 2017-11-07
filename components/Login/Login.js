

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';

    export default class Login extends Component {


    	constructor(props) {
    		super (props);
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
