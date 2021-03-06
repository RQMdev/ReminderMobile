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

		let localUri = result.uri;
		let filename = localUri.split('/').pop();

		let match = /\.(\w+)$/.exec(filename);
		let type = match ? `image/${match[1]}` : `image`;

		let formData = new FormData();

		formData.append('image', { uri: localUri, name: filename, type });

		this.props.handleImageUpload(formData);
		// if (!result.cancelled){
		// 	await	this.setState({ image: result.uri });
		// 	this.props.setImage(this.state.image);
		// }
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
