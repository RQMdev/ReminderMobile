import React from 'react';
import { StyleSheet, View , TextInput, TouchableOpacity, Text } from 'react-native';

export default class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form : {
				username: '',
				email: '',
				password: ''
			},
			passwordConfirmed: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChangeInfos = this.onChangeInfos.bind(this);
		this.confirmPassword = this.confirmPassword.bind(this);
	}

	handleSubmit() {
		if (this.state.passwordConfirmed){
			console.log('Password Matching');
			console.log(this.state);
			// Fetch Here
			fetch('http://10.0.2.52:3001/users/signup', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.form)
			})
			.then( res => res.json() )
			.then( data => console.log(data) )

		} else {
			console.log('Password Not Matching');
			console.log(this.state);
			// Handle not matching Password Error.
		}
	}

	onChangeInfos(value, state){
		this.setState({form: {
			...this.state.form,
			[state]: value
		}});
	}

	confirmPassword(value){
		if (value == this.state.form.password){
			this.setState({passwordConfirmed: true});
		} else {
			this.setState({passwordConfirmed: false});
		}
	}

	render() {
    const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
			<TextInput
			ref="username"
			state="username"
			onChangeText={ value => {this.onChangeInfos(value, 'username')} }
			placeholder=" Username"
			underlineColorAndroid = 'transparent'
			style={styles.input}
			/>

			 <TextInput
			 ref="email"
			 state="email"
			 onChangeText={ value => {this.onChangeInfos(value, 'email')} }
			 placeholder=" E-mail"
			 underlineColorAndroid = 'transparent'
			 style={styles.input}
			 />

			 <TextInput
			 ref="password"
			 state="password"
			 onChangeText={ value => {this.onChangeInfos(value, 'password')} }
			 placeholder=" Password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />

			 <TextInput
			 ref="password2"
			 onChangeText={ value => {this.confirmPassword(value)} }
			 placeholder=" Password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />
			 	<View style={styles.buttonContainer}>
				 <TouchableOpacity style={styles.button} onPress = {() => navigate('SignIn')}>
					 <Text style={styles.buttonPrevious}> Previous </Text>
				 </TouchableOpacity>

			   <TouchableOpacity style={styles.button} onPress={this.handleSubmit.bind(this)}>
					 <Text style={styles.buttonNext}> Next </Text>
			   </TouchableOpacity>
			  </View>
			 </View>

			);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},

	input: {
		height: 45,
		backgroundColor: '#F5F5F5',
		marginBottom: 30,
		color: "#333333",
		borderRadius: 10,
		fontSize: 16
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

	buttonNext: {
		backgroundColor: '#f55c54',
		paddingVertical: 15,
		color: '#F5F5F5',
		borderRadius: 10,
		padding: 52,
		textAlign: 'center',
		fontSize: 14
	},

	buttonPrevious: {
		backgroundColor: '#f55c54',
		paddingVertical: 15,
		color: '#F5F5F5',
		borderRadius: 10,
		padding: 37,
		textAlign: 'center',
		fontSize: 14
	},
    button: {
        width: 140,
    }

});
