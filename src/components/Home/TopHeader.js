import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Ionicons name="location-sharp" size={34} color="#FDB416" />

        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Rathyarta Crossing..
          </Text>
          <Text>Jahumandi</Text>
        </View>
        <AntDesign
          style={{marginTop: 8}}
          name="down"
          size={20}
          color="#FDB416"
        />
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5
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
