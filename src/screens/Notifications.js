import {View, Text} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Notifications = () => {
  return (
    <View style={{flex: 1}}>
      <PressBackWithTitle title="Notifications" />

      <View
        style={{
          marginHorizontal: 150,
          backgroundColor: '#FDB416',
          marginTop: 150,
          padding: 50,
          borderRadius: 50,
        }}>
        <MaterialCommunityIcons
          style={{
            textAlign: 'center',
            position: 'absolute',
            marginTop: 15,
            marginLeft: 2,
          }}
          name="bell-badge"
          size={100}
          color="black"
        />
      </View>

      <View style={{marginHorizontal: 30}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {'     '}Nothing Here !!!
        </Text>
        <Text style={{textAlign: 'center', marginTop: 10, color: 'black'}}>
          {'       '}You don't have any notifications currently
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
