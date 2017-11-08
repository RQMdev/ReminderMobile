import React from 'react';
import ActionButton from 'react-native-action-button';
import { APP_COLORS } from './../../../styles/color';

const ButtonAddTask = ({ onPressCallBack }) => (
  <ActionButton
    buttonColor={APP_COLORS.primaryAction}
    onPress={() => onPressCallBack()}
    name="add"
  />

);

export default ButtonAddTask;
