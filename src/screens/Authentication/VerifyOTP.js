import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';
import PressBack from '../../components/Reusable/PressBack';
import {useRoute} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const VerifyOTP = () => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const [countdown, setCountdown] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const UserNumber = route.params.Number;
    console.log(UserNumber);
    setEnteredNumber(UserNumber);
    handleStartTimer();
  }, []);





  
  const handleStartTimer = () => {
    var timeleft = 10;

    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }

      setCountdown(10 - timeleft);
      timeleft -= 1;
    }, 1000);
  };





  
  

  const handleVerifyCode = () => {
    console.log(pin1.pin1, pin2.pin2, pin3.pin3, pin4.pin4);
    navigation.replace('Home');
  };

  return (
    <View>
      <PressBack />
      <View style={{marginHorizontal: 30, marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Enter OTP
        </Text>

        <Text style={{marginTop: 30, fontSize: 20, color: 'black'}}>
          We have Sent You An OTP On This Number{' '}
          <Text style={{color: '#FDB416', fontSize: 20, fontWeight: 'bold'}}>
            {enteredNumber}
          </Text>
        </Text>

        <View style={{marginTop: 50}}>
          {countdown == 10 ? (
            <></>
          ) : (
            <>
              <Text style={{marginHorizontal: 15, color: 'black'}}>
                Resend In {countdown} Sec
              </Text>
            </>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 5,
            }}>
            <TextInput
              ref={pin1Ref}
              onChangeText={text => {
                setPin1({pin1: text});

                if (pin1.pin1 != '') {
                  pin2Ref.current.focus();
                }
              }}
              keyboardType="number-pad"
              style={styles.OtpInput}
              maxLength={1}
            />
            <TextInput
              ref={pin2Ref}
              onChangeText={text => {
                setPin2({pin2: text});
                if (pin2.pin2 != '') {
                  pin3Ref.current.focus();
                }
              }}
              keyboardType="number-pad"
              style={styles.OtpInput}
              maxLength={1}
            />
            <TextInput
              ref={pin3Ref}
              onChangeText={text => {
                setPin3({pin3: text});
                if (pin3.pin3 != '') {
                  pin4Ref.current.focus();
                }
              }}
              keyboardType="number-pad"
              style={styles.OtpInput}
              maxLength={1}
            />
            <TextInput
              ref={pin4Ref}
              onChangeText={text => {
                setPin4({pin4: text});
              }}
              keyboardType="number-pad"
              style={styles.OtpInput}
              maxLength={1}
            />
          </View>

          {/* <TextInput
            onChangeText={text => {
              setEnteredOTP({enteredOTP: text});
            }}
            keyboardType="number-pad"
            style={styles.input}
            maxLength={5}
          /> */}

          <TouchableOpacity onPress={handleVerifyCode}>
            <Text style={styles.button}>
              Verify OTP{' '}
              <Entypo
                style={{marginTop: 8}}
                name="chevron-right"
                size={20}
                color="black"
              />
            </Text>
          </TouchableOpacity>

          {countdown == 10 ? (
            <>
              <TouchableOpacity onPress={() => handleStartTimer()}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: '20%',
                    fontWeight: 'bold',
                    color: 'black',
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
