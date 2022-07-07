import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';
import PressBack from '../../components/Reusable/PressBack';
import {useRoute} from '@react-navigation/native';

const VerifyOTP = () => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const [countdown, setCountdown] = useState('');
  const [enteredNumber, setEnteredNumber] = useState("")
  const navigation = useNavigation();
  const route = useRoute();


  
  useEffect(() => {
    const UserNumber = route.params.Number;
    console.log(UserNumber)
    setEnteredNumber(UserNumber)
    handleStartTimer()
  }, []);
  
  
  const handleStartTimer = () =>{
    var timeleft = 10;
  
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
  
      setCountdown(10 - timeleft);
      timeleft -= 1;
    }, 1000);

  }

  const handleVerifyCode = () => {
    console.log(enteredOTP.enteredOTP);
    navigation.replace('Home');
  };

  return (
    <View>
      <PressBack />
      <View style={{marginHorizontal: 30, marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Enter OTP</Text>

        <Text style={{marginTop: 30, fontSize: 20}}>
          We have Sent You An OTP On This Number{' '}
          <Text style={{color: '#FDB416', fontSize: 20, fontWeight: 'bold'}}>
            {enteredNumber}
          </Text>
        </Text>

        <View style={{marginTop: 100}}>
          {countdown == 10 ? (
            <></>
          ) : (
            <>
              <Text style={{marginHorizontal: 10}}>
                Resend In {countdown} Sec
              </Text>
            </>
          )}
          <TextInput
            onChangeText={text => {
              setEnteredOTP({enteredOTP: text});
            }}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleVerifyCode}>
            <Text style={styles.button}>Verify OTP</Text>
          </TouchableOpacity>

          {countdown == 10 ? (
            <>
              <TouchableOpacity onPress={()=>handleStartTimer()}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop:"20%",
                    fontWeight: 'bold',
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default VerifyOTP;
