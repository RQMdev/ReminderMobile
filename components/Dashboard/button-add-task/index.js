import React from 'react';
import ActionButton from 'react-native-action-button';
<<<<<<< HEAD
import { Icon } from 'react-native-elements';
=======
>>>>>>> 11d1e4ef1805c781bb60c98d5e98a306a5f40a77
import { APP_COLORS } from './../../../styles/color';

const ButtonAddTask = ({ onPressCallBack }) => (
  <ActionButton
    buttonColor={APP_COLORS.primaryAction}
    onPress={() => onPressCallBack()}
    name="add"
  />

);

export default ButtonAddTask;
