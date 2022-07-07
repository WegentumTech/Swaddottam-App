import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Coins = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 20}}>
      <View
        style={{
          backgroundColor: '#EF2828',
          padding: 15,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <Text style={{flex: 1}}>
          <MaterialCommunityIcons name="bitcoin" size={55} color="white" />
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 7,
            color: 'white',
          }}>
          100
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 15,
            color: 'white',
          }}>
          Redeem
        </Text>
      </View>
    </View>
  );
};

export default Coins;
