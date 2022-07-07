import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const Footer = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={styles.comingsoon}
        source={{
            uri: 'https://helpon.in/UI/assets/img/coming_soon.gif',
          }}
      />
    </View>
  );
};

export default Footer;
