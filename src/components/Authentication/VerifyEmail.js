import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';

const VerifyEmail = () => {
  const [enteredEmailOtp, setEnteredEmailOtp] = useState('');
  const navigation = useNavigation();

  const handleVerifyCode = () => {
    console.log(enteredEmailOtp.enteredEmailOtp);
    navigation.replace('Home');
  };

  return (
    <View style={{marginHorizontal: 30, marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Enter OTP</Text>

      <View style={{marginTop: 100}}>
        <Text style={{marginHorizontal: 10}}>Enter OTP From Mail:</Text>
        <TextInput
          onChangeText={text => {
            setEnteredEmailOtp({enteredEmailOtp: text});
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

export default VerifyEmail;
