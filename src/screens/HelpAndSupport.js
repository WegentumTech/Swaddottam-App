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
          source={require('../assets/img/customersupport.png')}
        />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
          }}>
          How Can We Help You ?
        </Text>

        <Text style={{marginHorizontal: 20, marginTop: 10, color: 'black'}}>
          It looks like you are experiencing problems with our app. We are here
          to help so please get in touch with us
        </Text>
      </View>

      <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>
        Just Mail Us On This Email-ID : <Text style={{fontWeight:"bold"}} >something@gmail.com</Text>
      </Text>
    </View>
  );
};

export default HelpAndSupport;
