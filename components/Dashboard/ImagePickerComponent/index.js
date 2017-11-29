import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			image: null,
		}
	}

	_pickImage = async () => {
		let result = await ImagePicker.launchLibraryAsync();
		console.log(result);

		if (!result.cancelled){
			this.setState({ image: result.uri });
		}
	}

	render () {
		let { image } = this.state;

		return (
			<View>
				<Button
					title="Choose Image"
					onPress={this._pickImage}
				/>
				{image &&
				<Image
					source={{ uri: image }}
					style={{ width: 100, height: 100 }}
				/>}
			</View>
		);
	}
}
