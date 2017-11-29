import { StyleSheet } from 'react-native';
import { APP_COLORS } from './../../../styles/color';

export const style = StyleSheet.create({
  buttonChangeStatus: {
    backgroundColor: APP_COLORS.lightPrimaryColor,
    marginBottom: 2
  },
  buttonDelete: {
    backgroundColor: APP_COLORS.primaryAction,
    marginBottom: 2
  },
  modal: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'space-around',
    borderRadius: 5
  },
  buttonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',

  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
