import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';

const VerifyOTP = () => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const navigation = useNavigation();

  const handleVerifyCode = () => {
    console.log(enteredOTP.enteredOTP);
    navigation.replace('Home');
  };

  return (
    <View style={{marginHorizontal: 30, marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Enter OTP</Text>


      <Text style={{marginTop:10}} >We have Sent You An OTP On This Number</Text>





      <View style={{marginTop: 100}}>
        <Text style={{marginHorizontal: 10}}>Resend In 9 Sec</Text>
        <TextInput
          onChangeText={text => {
            setEnteredOTP({enteredOTP: text});
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleVerifyCode}>
          <Text style={styles.button}>Verify OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '20%',
              fontWeight: 'bold',
            }}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyOTP;
