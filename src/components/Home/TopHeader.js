import {View, Text, Image, TouchableOpacity,Alert,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TopHeader = () => {
  const [Address, setAddress] = useState('Searching Your Address...');
  const [Locality, setLocality] = useState('Your State');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const Checking = async () => {
      const address1 = await AsyncStorage.getItem('location_lable');
      const address2 = await AsyncStorage.getItem('location_locality');

      if (address1 && address2) {
        console.log('value hai');
        const gotValue1 = await AsyncStorage.getItem('location_lable');
        const gotValue2 = await AsyncStorage.getItem('location_locality');
        console.log(gotValue1);
        console.log(gotValue2);

        setAddress(gotValue1);
        setLocality(gotValue2);
      } else {
        console.log('value nahi hai');

        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        })
          .then(location => {
            // console.log(location);

            axios
              .get(
                `http://api.positionstack.com/v1/reverse?access_key=ef9edc8ea9804f2f6fee92a75c5f815f&query=${location.latitude},${location.longitude}&limit=1`,
              )
              .then(acc => {
                // console.log(acc.data)

                const Ad1 = acc.data.data[0].name;
                const Ad2 = acc.data.data[0].locality;

                setAddress(acc.data.data[0].name);
                setLocality(acc.data.data[0].locality);

                AsyncStorage.setItem('location_lable', Ad1);
                AsyncStorage.setItem('location_locality', Ad2);

                console.log('value updated');
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(error => {
            const {code, message} = error;
            console.warn(code, message);
            Alert.alert("Please Turn On Your Location","For your better experince we need your approval to access your location. Then please allow us to access it.")
          });
      }
    };

    Checking();
  }, []);

  const clearData = async () => {
    AsyncStorage.clear('location_lable');
    AsyncStorage.clear('location_locality');
  };

  return (
    <View style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
      <TouchableOpacity activeOpacity={1} onPress={clearData}>
        {/* onPress={() => navigation.navigate('LocationSelect')}> */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Ionicons name="location-sharp" size={34} color="#FDB416" />

          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {Address}
            </Text>
            <Text style={styles.HeadingTextColor}>{Locality}</Text>
          </View>
          <AntDesign
            style={{marginTop: 8}}
            name="down"
            size={20}
            color="#FDB416"
          />
        </View>
      </TouchableOpacity>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome
            style={{backgroundColor: '#FDB416', padding: 8, borderRadius: 20}}
            name="user-alt"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;
