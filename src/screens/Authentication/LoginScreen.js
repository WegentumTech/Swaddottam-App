import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import VerifyOTP from './VerifyOTP';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();


  const handlePressLogin = () => {
    // console.log(mobileNumber.mobileNumber);
    navigation.navigate("VerifyOTP", {Number: mobileNumber.mobileNumber})
  };

  return (
    <View>
      <View style={{marginHorizontal: 30, marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold',color:"black"}}>Login</Text>

        <View style={{marginTop: 100}}>
          <Text style={{marginHorizontal: 10,color:"black"}}>Enter Your Mobile Number</Text>
          <TextInput
          keyboardType='number-pad'
            onChangeText={text => {
              setMobileNumber({mobileNumber: text});
            }}
            style={styles.input}
            defaultValue="+91 "
            maxLength={14}
          />
          <TouchableOpacity onPress={handlePressLogin}>
            <Text style={styles.button}>Get OTP<Entypo
            style={{marginTop: 8}}
            name="chevron-right"
            size={20}
            color="black"
          /></Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '80%',
              fontWeight: 'bold',
            }}>
            Skip For Now
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default LoginScreen;
