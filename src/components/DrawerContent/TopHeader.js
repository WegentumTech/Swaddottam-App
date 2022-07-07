import {View, Text} from 'react-native';
import React from 'react';

const TopHeader = () => {
  return (
    <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 20}}>
      <Text style={{flex: 1}}>Back</Text>
      <Text style={{flex: 1, textAlign: 'right'}}>Bell</Text>
    </View>
  );
};

export default TopHeader;
