import {View, Text, Image} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
const HelpAndSupport = () => {
  return (
    <View>
      <PressBackWithTitle title="Help & Support" />
      <View>
        <Image
          style={styles.helpandsupportimage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          How Can We Help You ?
        </Text>

        <Text style={{marginHorizontal: 20, marginTop: 10}}>
          It looks like you are experiencing problems with our app. We are here
          to help so please get in touch with us
        </Text>
      </View>
    </View>
  );
};

export default HelpAndSupport;
