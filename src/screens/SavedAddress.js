import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
const SavedAddress = () => {
  return (
    <View>
      <PressBackWithTitle title="Saved Address" />

      <View style={{marginHorizontal: 20, marginTop: 50}}>
        <View
          style={{
            backgroundColor: '#FDB416',
            padding: 10,
            borderRadius: 8,
            marginTop: 10,
          }}>
          <View style={{paddingTop: 16, marginRight: 50}}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Satsang Nagar Colony Aktha, Sarnath Varanasi, 221007
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              +91 6393344720
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                textAlign: 'right',
                backgroundColor: 'white',
                marginLeft: 280,
                borderRadius: 5,
                padding: 2,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SavedAddress;
