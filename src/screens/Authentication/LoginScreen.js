import {View, Text, TextInput, TouchableOpacity,Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import VerifyOTP from './VerifyOTP';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from "axios"
import {BACKEND_URL} from "../../helper/baseUrl"
import {AuthKey} from "../../helper/baseUrl"
import {AuthPassword} from "../../helper/baseUrl"

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();
  const [message, setMessage] = useState(null)
  const [otp, setOtp] = useState()
  const [status, setStatus] = useState(null)


  const handlePressLogin = () => {
   const final_num = (mobileNumber.mobileNumber.replace(/ /g,''));
   console.log(final_num)


  if (final_num.length < 10) {
    return setMessage("Please Recheck Your Number And Try Again")
    
  }else{
    setMessage("")



    const headers = {
      authkey: AuthKey,
      secretkey: AuthPassword,
    };

    axios
      .post(BACKEND_URL + 'getotp', {
        "mobile":final_num


      }, headers)
      .then(acc => {
        console.log(acc.data);
        // setDatas(acc.data);
        setOtp(acc.data.otp)
        if(acc.data.status === true){

          navigation.navigate("VerifyOTP", {Number: mobileNumber.mobileNumber,ReveviedOtp:acc.data.otp})
        }
      })
      .catch(err => {
        console.log(err);
      });
  }







    
       






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

        <Text style={{textAlign:"center",color:"red"}} >{message ? message :""}</Text>





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
