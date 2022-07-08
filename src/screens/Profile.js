import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/GloablStyles';
import MyOrders from '../components/Profile/MyOrders';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{backgroundColor: '#FDB416', padding: 50}}>
        <AntDesign
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 20,
            marginHorizontal: 15,
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 100,
          }}
          name="arrowleft"
          size={20}
          color="black"
        />

        <Image
          style={{width: '100%', height: 75}}
          source={require('../assets/img/SplashLogo.png')}
        />
      </View>
      <Image
        style={styles.UserProfileIcon}
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 80,
            marginBottom: 30,
            flex: 1,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Wegentum Tech
          </Text>
          <Text style={{fontSize: 15, color: 'black'}}>@wegentum1</Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 80,
            marginBottom: 30,
            flex: 1,
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")} >
            <Text
              style={{
                backgroundColor: '#FDB416',
                textAlign: 'center',
                marginTop: 5,
                padding: 10,
                borderRadius: 10,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <MyOrders />
    </ScrollView>
  );
};

export default Profile;
