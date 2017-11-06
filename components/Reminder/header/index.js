import React from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';

const Header = ({ content }) => (
  <View>
    <View style={style.subHeader} />
    <View style={style.header}>
      <Image 
       source={require('./images/logotype2.png')}
      />
    </View>
  </View>
);

export default Header;
