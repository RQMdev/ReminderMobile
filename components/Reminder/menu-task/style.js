import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const style = StyleSheet.create({
  buttonChangeStatus: { backgroundColor: APP_COLORS.lightPrimaryColor },
  buttonDelete: { backgroundColor: APP_COLORS.primaryAction },
  modal: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'space-around',
    borderRadius: 5
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
