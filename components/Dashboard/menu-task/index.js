import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';
import PickImage from './PickImage';
import MyDatePicker from './MyDatePicker';

export default class MenuTask extends React.Component {
  constructor (props) {
    super(props);
    this.setImage = this.setImage.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  setImage (image) {
    this.props.setImage(image);
  }

  handleImageUpload (formData) {
    this.props.handleImageUpload(formData);
  }

  handleDateChange (datePicked) {
    this.props.handleDateChange(datePicked);
  }

  render () {
    const {
      isVisible,
      onDisapearCallBack,
      onDeleteCallBack,
      onChangeStatusCallBack
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => onDisapearCallBack()}>
        <Modal
          isVisible={isVisible}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          <TouchableWithoutFeedback>
            <View style={style.modal}>
              <View style={style.textView}>
                <Text>Que souhaitez-vous faire sur la tâche ?</Text>
              </View>
              <View style={style.buttonView}>
                <Button
                  buttonStyle={style.buttonDelete}
                  title="Supprimer"
                  onPress={() => onDeleteCallBack(this)}
                />
                <Button
                  buttonStyle={style.buttonChangeStatus}
                  title="Changer de statut"
                  onPress={() => onChangeStatusCallBack()}
                />
                <PickImage setImage={this.setImage} handleImageUpload={this.handleImageUpload} />
                <MyDatePicker handleDateChange={this.handleDateChange} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableWithoutFeedback>
    );
  }
}

// const MenuTask = ({
//   isVisible,
//   onDisapearCallBack,
//   onDeleteCallBack,
//   onChangeStatusCallBack
// }) => (
//   <TouchableWithoutFeedback onPress={() => onDisapearCallBack()}>
//     <Modal
//       isVisible={isVisible}
//       animationIn={'zoomInDown'}
//       animationOut={'zoomOutUp'}
//       animationInTiming={1000}
//       animationOutTiming={1000}
//       backdropTransitionInTiming={1000}
//       backdropTransitionOutTiming={1000}
//     >
//       <TouchableWithoutFeedback>
//         <View style={style.modal}>
//           <View style={style.textView}>
//             <Text>Que souhaitez-vous faire sur la tâche ?</Text>
//           </View>
//           <View style={style.buttonView}>
//             <Button
//               buttonStyle={style.buttonDelete}
//               title="Supprimer"
//               onPress={() => onDeleteCallBack(this)}
//             />
//             <Button
//               buttonStyle={style.buttonChangeStatus}
//               title="Changer statut"
//               onPress={() => onChangeStatusCallBack()}
//             />
//             <PickImage />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   </TouchableWithoutFeedback>
// );
//
// export default MenuTask;
