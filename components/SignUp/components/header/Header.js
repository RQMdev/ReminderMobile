import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Header = () => {
<View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image
             source={require('./logotype.png')} 
             />
      </View>
      <View style={styles.formContainer}>
      </View>
    </View>

};

export default Header;