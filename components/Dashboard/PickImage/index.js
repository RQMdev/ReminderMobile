import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { style } from './style';

export default class PickImage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			image: null,
		}
	}

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync();
		console.log(result);

		if (!result.cancelled){
			await	this.setState({ image: result.uri });
			this.props.setImage(this.state.image);
		}
	}

	render () {
		let { image } = this.state;

		return (
			<View>
				<Button
					buttonStyle={style.buttonChangeStatus}
					title="Choisir une image"
					onPress={this._pickImage}
				/>
				{/* {image &&
				<Image
					source={{ uri: image }}
					style={{ width: 100, height: 100 }}
				/>} */}
			</View>
		);
	}
}
