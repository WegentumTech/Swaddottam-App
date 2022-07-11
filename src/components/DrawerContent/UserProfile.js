import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
        <Image
          style={styles.DrawerProfileIcon}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
          }}
        />
        <View style={{flex: 1}}>
          <View style={{marginTop: 5, marginHorizontal: 10}}>
            <View style={{alignItems: 'flex-end'}}>
              <EvilIcons name="pencil" size={24} color="black" />
            </View>

            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Hi, User
            </Text>
            <Text style={{color: 'black'}}>6393344720</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;
