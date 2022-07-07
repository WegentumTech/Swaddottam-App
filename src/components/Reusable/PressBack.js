import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PressBack = () => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text
        onPress={() => navigation.goBack()}
        style={{
          marginHorizontal: 10,
          backgroundColor: 'gray',
          borderRadius: 50,
          padding: 10,
          color: 'white',
        }}>
        Back
      </Text>
    </View>
  );
};

export default PressBack;
