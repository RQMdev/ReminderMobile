import React from 'react';
import { StyleSheet, View , TextInput, TouchableOpacity, Text } from 'react-native';

export default class SignUpForm extends React.Component {
	render() {
        const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
			<TextInput 
			placeholder=" Username"
			underlineColorAndroid = 'transparent'
			style={styles.input}
			 />

			 <TextInput 
			 placeholder=" E-mail"
			 underlineColorAndroid = 'transparent'
			 style={styles.input}
			 />

			 <TextInput 
			 placeholder=" Password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />

			 <TextInput 
			 placeholder=" Password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />
			 	<View style={styles.buttonContainer}>
			 <TouchableOpacity style={styles.button} onPress = {() => navigate('SignIn')}>
			<Text style={styles.buttonPrevious}> Previous </Text>
			 </TouchableOpacity>
			
			  <TouchableOpacity style={styles.button}>
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
