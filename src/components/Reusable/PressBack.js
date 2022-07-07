import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PressBack = () => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 25}}>
      <AntDesign
      onPress={()=>navigation.goBack()}
        style={{marginTop: 8}}
        name="leftcircle"
        size={25}
        color="black"
      />
    </View>
  );
};

export default PressBack;
