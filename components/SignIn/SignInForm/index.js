import React, { Component } from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity, Text, Image } from 'react-native';
import { SERVER_IP } from './../../../ServerConfig';


export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form : {
                email: '',
                password: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    		this.onChangeInfos = this.onChangeInfos.bind(this);
    }

    handleSubmit() {
        if (this.state.form.email === '' || this.state.form.password === '') {
           console.log('ça marche pas');
        } else {
            fetch('http://' + SERVER_IP + ':3001/users/signin', {
                method:  'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            })
            .then( res => res.json() )
            .then( data => this.props.handleToken(data.token) )
        }
    }

    onChangeInfos(value, state) {
        this.setState({form: {
            ...this.state.form,
            [state]: value
        }});
    }


		render() {
           const { navigate } = this.props.navigation;
	       return (
			<View style={styles.container} >
				 <TextInput
				 underlineColorAndroid='transparent'
				 placeholder="email"
				 style={styles.input}
				 onChangeText={ value => {this.onChangeInfos(value, 'email')} }
				 />
			  	 <TextInput
			  	 underlineColorAndroid='transparent'
			  	 placeholder="password"
				 secureTextEntry
				 style={styles.input}
				 onChangeText={ value => {this.onChangeInfos(value, 'password')}}
				 />
				<View>
					<View style={styles.flecheContainer}>
					<TouchableOpacity style={styles.buttonFleche} /*onPress = {() => navigate('Dashboard')}*/
                    onPress={this.handleSubmit} >
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
