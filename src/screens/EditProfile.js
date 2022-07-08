import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import PressBack from '../components/Reusable/PressBack';
import styles from '../Styles/GloablStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditProfile = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  return (
    <View>
      <PressBack />

      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.EditUserProfileIcon}
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            }}
          />
          <AntDesign
            style={{position: 'absolute', left: 230, top: 90,backgroundColor:"#FDB416",padding:5,borderRadius:30}}
            name="camera"
            size={20}
            color="white"

            
          />
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={{marginHorizontal: 10, color: 'black'}}>Full Name</Text>
        <TextInput
          keyboardType="default"
          onChangeText={text => {
            setFullName({fullName: text});
          }}
          style={styles.simpleInput}
          
        />

        <Text style={{marginHorizontal: 10, color: 'black', marginTop: 12}}>
          Username
        </Text>
        <TextInput
          keyboardType="default"
          onChangeText={text => {
            setUsername({username: text});
          }}
          style={styles.simpleInput}
          
        />

        <Text style={{marginHorizontal: 10, color: 'black', marginTop: 12}}>
          Email Address
        </Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={text => {
            setEmail({email: text});
          }}
          style={styles.simpleInput}
          
        />

        <Text style={{marginHorizontal: 10, color: 'black', marginTop: 12}}>
          Contact Number
        </Text>
        <TextInput
          keyboardType="number-pad"
          onChangeText={text => {
            setContactNumber({contactNumber: text});
          }}
          style={styles.simpleInput}
          
        />

        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              backgroundColor: '#FDB416',
              marginHorizontal: 80,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
