import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const TopHeader = () => {
  const navigation = useNavigation();


  const handlePressBack = () =>{
    navigation.closeDrawer();
  }





  return (
    <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 20}}>
      <AntDesign
        style={{flex: 1}}
        name="arrowleft"
        size={24}
        color="black"
      />
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <FontAwesome style={{flex: 1}} name="bell" size={24} color="black" />
      </View>
    </View>
  );
};

export default TopHeader;
