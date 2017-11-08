import React, { Component } from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity, Text, Image } from 'react-native';

export default class SignInForm extends Component {
		render() {
           const { navigate } = this.props.navigation;
	       return (
			<View style={styles.container}>
				 <TextInput
				 underlineColorAndroid='transparent'
				 placeholder="email"
				 	style={styles.input}
				 />
			  	 <TextInput
			  	 underlineColorAndroid='transparent'
			  	 placeholder="password"
					secureTextEntrer
				 	style={styles.input}
				 	/>
				<View>
					<View style={styles.flecheContainer}>
					<TouchableOpacity style={styles.buttonFleche} onPress = {() => navigate('Dashboard')}>
					  <Image
				  	  style={styles.Fleche}
				  	  source={require('../../../assets/img/Fleche.png')}
				  	  />
				  	  </TouchableOpacity>
				  	  </View>
				<TouchableOpacity onPress = {() => navigate('ForgetPassword')}>
					<Text style={styles.buttonText}>Forget your password ?</Text>
				</TouchableOpacity>
 			 	</View>
 			 	<View>
				<TouchableOpacity onPress = {() => navigate('SignUp')}>
					<Text style={styles.buttonText2}>Créer un compte</Text>
				</TouchableOpacity>
				</View>


			 </View>
			);
		}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,

	},
	input: {
		height: 60,
		backgroundColor: '#f5f5f5',
		marginTop:-30,
		marginBottom: 40,
		borderRadius: 15,
		paddingHorizontal: 10,
	},

	buttonText : {
		textAlign: 'center',
		marginBottom: 5,
		marginTop: 5,
		color: '#f5f5f5',
	},

	buttonText2 : {
		textAlign: 'center',
		color: '#f5f5f5',

	},

	flecheContainer: {
		alignItems: 'center',
		marginTop:-10,
	}



});
