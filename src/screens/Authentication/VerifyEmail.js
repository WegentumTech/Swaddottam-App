import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/GloablStyles';
import VerifyEmails from '../../components/Authentication/VerifyEmail';
const VerifyEmail = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [verifyEmailNow, setVerifyEmailNow] = useState(false);

  const handleEmailId = () => {
    console.log(enteredEmail.enteredEmail);
    setVerifyEmailNow(true)
  };

  return (
    <View>
      {verifyEmailNow ? (
        <>
          <VerifyEmails />
        </>
      ) : (
        <>
          <View style={{marginHorizontal: 30, marginTop: 50}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>VerifyEmail</Text>

            <View style={{marginTop: 100}}>
              <Text style={{marginHorizontal: 10}}>Enter Your Email</Text>
              <TextInput
                onChangeText={text => {
                  setEnteredEmail({enteredEmail: text});
                }}
                style={styles.input}
              />
              <TouchableOpacity onPress={handleEmailId}>
                <Text style={styles.button}>Submit Email</Text>
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
        </>
      )}
    </View>
  );
};

export default VerifyEmail;
