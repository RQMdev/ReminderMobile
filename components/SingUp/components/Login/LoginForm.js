import React from 'react';
import { StyleSheet, View , TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			<TextInput 
			placeholder=" username"
			underlineColorAndroid = 'transparent'
			style={styles.input}
			 />

			 <TextInput 
			 placeholder=" e-mail"
			 underlineColorAndroid = 'transparent'
			 style={styles.input}
			 />

			 <TextInput 
			 placeholder=" password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />

			 <TextInput 
			 placeholder=" password"
			 underlineColorAndroid = 'transparent'
			 secureTextEntry
			 style={styles.input}
			 />
			 	<View style={styles.coteacote}>
			 <TouchableOpacity style={styles.buttonContainer}>
			<Text style={styles.buttonPrevious}> Previous </Text>
			 </TouchableOpacity>
			
			  <TouchableOpacity style={styles.buttonContainer2}>
			<Text style={styles.buttonNext}> Next </Text>
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
		height: 62,
		backgroundColor: '#F5F5F5',
		marginBottom: 30,
		color: "#333333",
		borderRadius: 10,
		fontSize: 16
	},
	coteacote: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around' 
	},

	buttonNext: {
		backgroundColor: '#f55c54',
		paddingVertical: 15,
		color: '#F5F5F5',
		borderRadius: 10,
		padding: 52,
		textAlign: 'center',
		fontSize: 18
	},

	buttonPrevious: {
		backgroundColor: '#f55c54',
		paddingVertical: 15,
		color: '#F5F5F5',
		borderRadius: 10,
		padding: 37,
		textAlign: 'center',
		fontSize: 18
	}

});
