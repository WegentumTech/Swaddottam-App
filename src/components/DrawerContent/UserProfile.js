import {View, Text} from 'react-native';
import React from 'react';

const UserProfile = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
      <Text style={{flex: 1}}>Profile</Text>
      <Text style={{flex: 1}}>Text</Text>
    </View>
  );
};

export default UserProfile;
