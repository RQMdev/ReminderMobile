import React from 'react';
import { StyleSheet, View , TextInput, TouchableOpacity, Text } from 'react-native';

export default class Motdepasse extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			<TextInput 
			placeholder=" e-mail"
			underlineColorAndroid = 'transparent'
			style={styles.input}
			 />

			 <TouchableOpacity style={styles.buttonContainer}>
			<Text style={styles.buttonMDP}> Récuperer mon mot de passe </Text>
			 </TouchableOpacity>
			 
			</View>

			);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},

	input: {
		width: 300,
		marginBottom: 160,
		height: 62,
		backgroundColor: '#F5F5F5',
		color: "#333333",
		borderRadius: 10,
		fontSize: 18,
		textAlign: 'center'
	},
	buttonContainer: {
		borderRadius: 20,
		backgroundColor: '#f55c54',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

	buttonMDP: {
		paddingVertical: 15,
		color: '#F5F5F5',
		borderRadius: 10,
		textAlign: 'center',
		fontSize: 14
	}

});
