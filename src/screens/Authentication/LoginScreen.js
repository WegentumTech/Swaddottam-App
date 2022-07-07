import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import VerifyOTP from './VerifyOTP';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();


  const handlePressLogin = () => {
    console.log(mobileNumber.mobileNumber);
    navigation.navigate("VerifyOTP")
  };

  return (
    <View>
      <View style={{marginHorizontal: 30, marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Login</Text>

        <View style={{marginTop: 100}}>
          <Text style={{marginHorizontal: 10}}>Enter Your Mobile Number</Text>
          <TextInput
            onChangeText={text => {
              setMobileNumber({mobileNumber: text});
            }}
            style={styles.input}
          />
          <TouchableOpacity onPress={handlePressLogin}>
            <Text style={styles.button}>Get OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '80%',
              fontWeight: 'bold',
            }}>
            Skip For Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
